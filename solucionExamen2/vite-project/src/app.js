export default function createApp () {
    const app = document.getElementById('app')

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

    app.appendChild(header)
    app.appendChild(main)
}

