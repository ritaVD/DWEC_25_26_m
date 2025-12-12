import { peliculas } from "../db/data";
import fetching from "../utils/fetching";

export default function createEjercicio3() {
  // closures
  const notFetching = () => peliculas;

  const getStars = (rating) => {
    // rating sobre 10 → estrellas sobre 5
    const numStars = Math.floor(rating / 2);
    return "⭐".repeat(numStars);
  };

  const renderMoviesGrid = (moviesArray) => {
    const container = document.createElement("div");
    container.classList.add("movies-container");

    moviesArray.forEach((movie) => {
      const card = document.createElement("div");
      card.classList.add("movie-card");

      // título
      const title = document.createElement("h3");
      title.classList.add("movie-title");
      // según tu data: "titulo" y "año"
      title.textContent = movie.titulo;
      card.appendChild(title);

      // año
      const year = document.createElement("p");
      year.classList.add("movie-year");
      year.textContent = movie.año;
      card.appendChild(year);

      // estrellas / rating
      const ratingEl = document.createElement("p");
      ratingEl.classList.add("movie-rating");
      ratingEl.textContent = `${getStars(movie.rating)} ${movie.rating}/10`;
      card.appendChild(ratingEl);

      container.appendChild(card);
    });

    return container;
  };

  const render = (isSync = true) => {
    const mainContainer = document.createElement("div");

    if (isSync) {
      // Versión síncrona
      const v1Wrapper = document.createElement("div");
      v1Wrapper.innerHTML = "<h3>Versión síncrona</h3>";
      v1Wrapper.appendChild(renderMoviesGrid(notFetching()));
      mainContainer.appendChild(v1Wrapper);
    } else {
      // Versión asíncrona
      const v2Wrapper = document.createElement("div");
      v2Wrapper.innerHTML = "<h3>Versión asíncrona</h3>";

      fetching("peliculas")
        .then((data) => {
          v2Wrapper.appendChild(renderMoviesGrid(data));
        })
        .catch((err) => {
          console.log("Error: ", err);
          throw err;
        }); 

      mainContainer.appendChild(v2Wrapper);
    }

    return mainContainer;
  };

  return {
    // Esto luego se llama con () donde lo uses
    render,
  };
}
