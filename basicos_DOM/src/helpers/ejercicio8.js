// src/ejercicio8.js
import { menuRestaurante } from "../db/data";

export default function createEjercicio8() {

  // --------------------------
  // Helper de formato de precio
  // --------------------------
  const formatPrice = (price) => {
    return price.toFixed(2) + " €";
  };

  // --------------------------
  // Renderiza cada categoría
  // --------------------------
  const renderCategory = (categoryData) => {
    const categoryEl = document.createElement("div");
    categoryEl.classList.add("menu-category");

    // título de categoría
    const categoryTitle = document.createElement("h2");
    categoryTitle.classList.add("category-title");
    categoryTitle.textContent = categoryData.nombre;
    categoryEl.appendChild(categoryTitle);

    // divisor
    const divider = document.createElement("hr");
    divider.classList.add("category-divider");
    categoryEl.appendChild(divider);

    // contenedor de platos
    const dishesContainer = document.createElement("div");
    dishesContainer.classList.add("dishes-container");

    // recorrer los platos
    categoryData.platos.forEach((dish) => {
      const dishItem = document.createElement("div");
      dishItem.classList.add("dish-item");

      // header del plato (nombre + precio)
      const dishHeader = document.createElement("div");
      dishHeader.classList.add("dish-header");

      const dishName = document.createElement("span");
      dishName.classList.add("dish-name");
      dishName.textContent = dish.nombre;

      const dishPrice = document.createElement("span");
      dishPrice.classList.add("dish-price");
      dishPrice.textContent = formatPrice(dish.precio);

      dishHeader.appendChild(dishName);
      dishHeader.appendChild(dishPrice);
      dishItem.appendChild(dishHeader);

      // descripción
      const description = document.createElement("p");
      description.classList.add("dish-description");
      description.textContent = dish.descripcion;

      dishItem.appendChild(description);

      dishesContainer.appendChild(dishItem);
    });

    categoryEl.appendChild(dishesContainer);

    return categoryEl;
  };

  // --------------------------
  // Render principal
  // --------------------------
  const render = () => {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    // título del restaurante
    const restaurantTitle = document.createElement("h1");
    restaurantTitle.classList.add("restaurant-title");
    restaurantTitle.textContent = menuRestaurante.nombre;
    menuContainer.appendChild(restaurantTitle);

    // recorrer categorías
    menuRestaurante.categorias.forEach((cat) => {
      menuContainer.appendChild(renderCategory(cat));
    });

    return menuContainer;
  };

  return {
    render,
  };
}
