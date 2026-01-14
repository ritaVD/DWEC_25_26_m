import createBookAPI from "./api/bookAPI";
import createBookCard from "./components/BookCard";

export async function createApp() {
    const app = document.getElementById('app');

    const containerPrincipal = document.createElement('div');

    const header = document.createElement('header');
    const title= document.createElement('h1')
    title.textContent = 'AmazonBooks Lite-Rita Vicente';
    header.appendChild(title)
    containerPrincipal.appendChild(header);

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');


    const searchInput = document.createElement('input')
    searchInput.type = 'text';
    searchInput.id = 'search-input'
    searchInput.classList.add('search-input');
    searchInput.placeholder = 'Escribe '
    mainContainer.appendChild(searchInput);

    const buttones = ["Todos", "Fantasía", "Ciencia Ficción", "Romance", "Thriller", "Terror",
    "Historia"]

    buttones.forEach(button => {
        const button1 = document.createElement('button');
        button1.classList.add('category-btn');
    })

    const libros = createBookAPI();
    const books = await libros.fetchAllBooks();
    
    const containerBook = document.createElement('div')
    containerBook.id = 'books-container'
    containerBook.classList.add('books-container')
    books.forEach(book => {
        containerBook.appendChild(createBookCard(book))

    })
    mainContainer.appendChild(containerBook);
    containerPrincipal.appendChild(mainContainer)

    app.appendChild(containerPrincipal);
    
}