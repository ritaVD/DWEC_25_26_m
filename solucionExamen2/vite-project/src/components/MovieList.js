import { createMovieCard } from "./MovieCard"

export const MovieList = () => {
    const container = document.getElementById('moviesContainer');

    const clear = () => {
        if (container) container.innerHTML = ''
    } //borra lo que ya hay dentro del contenedor para poner peliculas nuevas

    //Recibe un array de peliculas (movies)
    const render = (movies)  => {
        clear(); //limpia la pantalla para evitar pintar de nuevo y sobrepintar
        if(movies.length === 0){ //En el caso de que el array este vacio (no haya peliculas)
            const noResult = document.createElement('div')
            noResult.className = 'no-results'
            noResult.textContent = 'No se encontraron resultados'
            container.appendChild(noResult)
            return;
            //Creamos un div con un texto y un estilo y lo metemos al contenedor principal, para mostrar que no hay peliculas
        }
        movies.forEach(movie => {
            const card = createMovieCard(movie)
            container.appendChild(card)
        });

    }

    return {
        render,
        clear
    }

}