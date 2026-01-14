import createStorage from "../utils/storage";

export default function createBookCard (book){
    const card = document.createElement('div');
    card.classList.add('book-card');
    card.dataset.id= book.id;
    const image = document.createElement('img')
    image.src = `URL${book.cover}`
    image.classList.add('book-cover')
    card.appendChild(image);

    const container = document.createElement('div')
    container.classList.add('book-info');

    const titulo = document.createElement('h3')
    titulo.classList.add('book-title')
    titulo.textContent = book.title;

    const autor = document.createElement('p');
    autor.classList.add('book-author');
    autor.textContent = book.author

    const año = document.createElement('p')
    año.classList.add('book-year');
    año.textContent = `Año: ${book.year}`;

    const categoria = document.createElement('p')
    categoria.classList.add('book-category')
    categoria.textContent = book.category;

    container.appendChild(titulo)
    container.appendChild(autor)
    container.appendChild(año)
    container.appendChild(categoria)
    card.appendChild(container);

    card.addEventListener('click', () => {
        if (card.classList.contains('book-favorite')){
            card.classList.remove('book-favorite');

            const favorites = createStorage();
            favorites.removeFavorite(book.id)
        }else{
            card.classList.add('book-favorite')
            const favorites = createStorage();
            favorites.addFavorite(book.id)
        }
    })

    card.addEventListener('dblclick', () => {
        card.remove();
    })



    return card;
}