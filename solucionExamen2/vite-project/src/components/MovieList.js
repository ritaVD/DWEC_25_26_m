import { createMovieCard } from "./MovieCard"

export const MovieList = () => {
    const container = document.getElementById('moviesContainer')

    const clear = () => {
        if (container) container.innerHTML = ''
    }

    const render = (movies)  => {
        clear();
        if(movies.length === 0){
            const noResult = document.createElement('div')
            noResult.className = 'no-results'
            noResult.textContent = 'No se encontraron resultados'
            container.appendChild(noResult)
            return
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