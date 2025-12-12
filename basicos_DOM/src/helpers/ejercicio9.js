// src/ejercicio9.js
import { eventos } from "../db/data";
import fetching from "../utils/fetching";

export default function createEjercicio9() {

  // -----------------------------
  // 1. Versión sin fetch
  // -----------------------------
  const notFetching = () => eventos;

  // -----------------------------
  // 2. Helper: formatear fecha y hora
  // -----------------------------
  const formatDateTime = (fecha, hora) => {
    const d = new Date(`${fecha}T${hora}`);
    const fechaFormateada = d.toLocaleDateString();
    const horaFormateada = d.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${fechaFormateada} - ${horaFormateada}`;
  };

  // -----------------------------
  // 3. Crear un evento individual
  // -----------------------------
  const renderEventItem = (eventData, index) => {
    const item = document.createElement("div");
    item.classList.add("timeline-item");

    // par = left, impar = right
    const esPar = (index + 1) % 2 === 0;
    item.classList.add(esPar ? "left" : "right");

    const content = document.createElement("div");
    content.classList.add("event-content");

    // Título
    const title = document.createElement("h3");
    title.classList.add("event-title");
    title.textContent = eventData.nombre;
    content.appendChild(title);

    // Fecha + hora
    const datetime = document.createElement("p");
    datetime.classList.add("event-datetime");
    datetime.textContent = formatDateTime(eventData.fecha, eventData.hora);
    content.appendChild(datetime);

    // Lugar
    const location = document.createElement("p");
    location.classList.add("event-location");
    location.textContent = eventData.lugar;
    content.appendChild(location);

    // Lista de ponentes
    const speakersList = document.createElement("ul");
    speakersList.classList.add("speakers-list");

    eventData.ponentes.forEach((p) => {
      const li = document.createElement("li");
      li.textContent = p;
      speakersList.appendChild(li);
    });

    content.appendChild(speakersList);

    // Meta: asistentes + precio
    const meta = document.createElement("p");
    meta.classList.add("event-meta");

    const asist = eventData.info?.asistentes;
    const precio = eventData.info?.precio;

    const partes = [];
    if (asist) partes.push(`${asist} asistentes`);
    if (precio) partes.push(`${precio.toFixed(2)} €`);

    meta.textContent = partes.join(" · ");

    content.appendChild(meta);

    item.appendChild(content);
    return item;
  };

  // -----------------------------
  // 4. Render principal (mismos dos modos del examen)
  // -----------------------------
  const render = (isSync = true) => {
    const main = document.createElement("div");
    main.classList.add("timeline-container");

    // La línea del timeline
    const line = document.createElement("div");
    line.classList.add("timeline-line");
    main.appendChild(line);

    // --- VERSIÓN SÍNCRONA ---
    if (isSync) {
      const data = notFetching();
      data.forEach((ev, index) => {
        const evItem = renderEventItem(ev, index);
        main.insertAdjacentElement("beforeend", evItem);
      });
      return main;
    }

    // --- VERSIÓN ASÍNCRONA (CON FETCH) ---
    fetching("eventos")
      .then((data) => {
        data.forEach((ev, index) => {
          const evItem = renderEventItem(ev, index);
          main.insertAdjacentElement("beforeend", evItem);
        });
      })
      .catch((err) => {
        console.error("Error cargando eventos:", err);
      });

    return main; // Se devuelve igual, y los eventos se insertan cuando lleguen
  };

  return { render };
}
