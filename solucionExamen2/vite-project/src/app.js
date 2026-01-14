import { MovieList } from "./components/MovieList";
import { MovieServices } from "./services/movieServices"

export default async function createApp () {
    const app = document.getElementById('app');
    await MovieServices.fetchMovies();
    const movies = MovieServices.getMovies();
    
    // HEADER
    const header = document.createElement('header')
    header.className = 'header'

    const title = document.createElement('h1')
    title.textContent = 'MovieFlix Rita'
    header.appendChild(title)

    // MAIN
    const main = document.createElement('main')
    main.className = 'main-container'

    // FILTROS
    const filterContainer = document.createElement('div')
    filterContainer.className = 'filter-container'

    const searchInput = document.createElement('input')
    searchInput.type = 'text'
    searchInput.className = 'search-input'
    searchInput.placeholder = 'Buscar películas...'

    // SORT
    const sortContainer = document.createElement('div')
    sortContainer.className = 'sort-container'

    const sortSelect = document.createElement('select')
    sortSelect.className = 'sort-select'

    const sortOptiones = ['Sin filtro', 'Valoracion', 'A-Z', 'Z-A']

    sortOptiones.forEach(option => {
        const optionElement = document.createElement('option')
        optionElement.value = option
        optionElement.textContent = option
        sortSelect.appendChild(optionElement)

    })

    sortContainer.appendChild(sortSelect)       
    filterContainer.appendChild(searchInput)
    filterContainer.appendChild(sortContainer)

    main.appendChild(filterContainer)

    const filmContainer = document.createElement('div');
    filmContainer.classList.add('movies-container')
    filmContainer.id = 'moviesContainer';
    main.appendChild(filmContainer);
    
    app.appendChild(header)
    app.appendChild(main)

    searchInput.addEventListener("input", () => {
        filmContainer.innerHTML = ""
        MovieList().render(movies.filter(movie => {
            return movie.title.toLowerCase().includes(searchInput.value.toLowerCase());
        }));
    });
    
    MovieList().render(movies);
    sortSelect.addEventListener('change', () => {
        if(sortSelect.value === 'Sin filtros'){
            MovieList().render(movies);
        }else if (sortSelect.value === 'Valoracion'){
            MovieList().render(movies.sort((a, b) => b.vote_average -a.vote_average))
        }else if (sortSelect.value === 'A-Z'){
            MovieList().render(movies.sort((a, b) => a.title.localeCompare(b.title)))
        }else if (sortSelect.value === 'Z-A'){
            MovieList().render(movies.sort((a, b) => b.title.localeCompare(a.title)))
        }
    });
    
}

