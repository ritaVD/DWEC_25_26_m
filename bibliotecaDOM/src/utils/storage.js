export default function createStorage () {
    function getFavorites(KEY){
        const data = localStorage.getItem(KEY)
        if(!data){
            return []
        }
        return JSON.parse(data);
    }


    function addFavorite (bookId){
        const books = getFavorites('favorites');
        books.push(bookId);
        localStorage.setItem('favorites', JSON.stringify(books))
    }

    function removeFavorite(bookId){
        const books = getFavorites('favorites');
        //El filter ya devuleve un array
        const books2 = books.filter(book => book !== bookId)
        localStorage.setItem('favorites', JSON.stringify(books2))

    }

    function isFavorite(bookId){
        const books = getFavorites('favorites');
        const index = books.indexOf(bookId)
        if(index === -1){
            return false
        }
        return true; 
    }

    return {
        getFavorites,
        addFavorite, 
        removeFavorite,
        isFavorite
    }
}