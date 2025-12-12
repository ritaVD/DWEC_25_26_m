// Archivo: proyectoBase.js
export const createProyectoBase = () => {
  // 1. VARIABLES DE ENTORNO / CONSTANTES -----------------------------------
  const API_URL = import.meta.env.VITE_API_URL || "https://ejemplo.com/api";
  const API_KEY = import.meta.env.VITE_API_KEY || "";

  // 2. HELPERS LOCALSTORAGE (Map) -------------------------------------------
  const guardarLocalStorage = (tipo, map) =>
    localStorage.setItem(tipo, JSON.stringify([...map]));

  const sacarLocalStorage = (tipo) => {
    const data = localStorage.getItem(tipo);
    if (!data) return null;
    return new Map(JSON.parse(data));
  };

  // 3. ESTADO EN MEMORIA (cache, favoritos, lo que toque) -------------------
  const cache = new Map(sacarLocalStorage("cache") || []);
  const favoritos = new Map(sacarLocalStorage("favoritos") || []);

  // 4. FUNCIONES DE LÓGICA (fetch, añadir/quitar favoritos, etc.) -----------

  // 💧 EJEMPLO DE FETCH GENÉRICO (AJÚSTALO AL EJERCICIO)
  const buscarElemento = async (query) => {
    if (!query) return null;

    const key = query.trim().toLowerCase();

    // 4.1. Mirar en cache
    if (cache.has(key)) {
      return cache.get(key);
    }

    // 4.2. Llamar a la API
    const response = await fetch(
      `${API_URL}?q=${encodeURIComponent(key)}&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Error al llamar a la API");
    }

    const data = await response.json();

    // 4.3. Guardar en cache + localStorage
    cache.set(key, data);
    guardarLocalStorage("cache", cache);

    return data;
  };

  const addFavorite = (item, key) => {
    if (!item || !key) return;
    favoritos.set(key, item);
    guardarLocalStorage("favoritos", favoritos);
  };

  const removeFavorite = (key) => {
    if (!key) return;
    if (!favoritos.has(key)) return;
    favoritos.delete(key);
    guardarLocalStorage("favoritos", favoritos);
  };

  // 5. COMPONENTES DE UI (tarjetas, listas, etc.) ---------------------------

  // 🔹 Tarjeta genérica
  const createCard = (item) => {
    if (!item) return null;

    const cardContainer = document.createElement("div");
    const card = document.createElement("div");

    // Aquí pones lo que quieras pintar (títulos, textos, imagen…)
    const title = document.createElement("h2");
    title.textContent = item.name || "Sin nombre";
    card.appendChild(title);

    // EJEMPLO extra: descripción
    const description = document.createElement("p");
    description.textContent = item.description || "Sin descripción";
    card.appendChild(description);

    // Doble click → favorito
    card.addEventListener("dblclick", () => {
      const key = (item.name || "").toLowerCase();
      addFavorite(item, key);
      updateFavoritesUI();
    });

    // Botón derecho → quitar de favoritos
    card.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      const key = (item.name || "").toLowerCase();
      removeFavorite(key);
      updateFavoritesUI();
    });

    cardContainer.appendChild(card);
    return cardContainer;
  };

  const renderFavorites = (values) => {
    const container = document.createElement("div");
    values.forEach((item) => container.appendChild(createCard(item)));
    return container;
  };

  const updateFavoritesUI = () => {
    const container = document.getElementById("favoritos-container");
    if (!container) return;
    container.innerHTML = "";
    container.appendChild(renderFavorites(favoritos.values()));
  };

  // 6. HEADER Y FOOTER ------------------------------------------------------
  const renderHeader = () => {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Título de la App";
    header.appendChild(h1);
    return header;
  };

  const renderFooter = () => {
    const footer = document.createElement("footer");
    const p = document.createElement("p");
    p.textContent = "2025 - Lo que sea.";
    footer.appendChild(p);
    return footer;
  };

  // 7. FUNCIÓN PRINCIPAL RENDER ---------------------------------------------
  const render = () => {
    const mainContainer = document.createElement("div");

    const wrapper = document.createElement("div");
    wrapper.appendChild(renderHeader());

    // 🔹 Formulario de búsqueda
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Escribe aquí lo que quieras buscar";
    form.appendChild(input);
    wrapper.appendChild(form);

    // 🔹 Contenedor de resultados
    const resultadosTitulo = document.createElement("h2");
    resultadosTitulo.textContent = "Resultados";
    wrapper.appendChild(resultadosTitulo);

    const resultadosContainer = document.createElement("div");
    wrapper.appendChild(resultadosContainer);

    // 🔹 Contenedor de favoritos
    const favTitulo = document.createElement("h2");
    favTitulo.textContent = "Favoritos";
    wrapper.appendChild(favTitulo);

    const favoritosContainer = document.createElement("div");
    favoritosContainer.id = "favoritos-container";
    favoritosContainer.appendChild(renderFavorites(favoritos.values()));
    wrapper.appendChild(favoritosContainer);

    wrapper.appendChild(renderFooter());
    mainContainer.appendChild(wrapper);

    // Evento submit del formulario -> usa buscarElemento (fetch)
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        const data = await buscarElemento(input.value);
        const card = createCard(data);
        if (card) resultadosContainer.appendChild(card);
        input.value = "";
      } catch (error) {
        console.error(error);
        alert("No se ha podido completar la búsqueda");
      }
    });

    return mainContainer;
  };

  // 8. DEVOLVER SOLO RENDER ---------------------------------------------------
  return { render };
};
