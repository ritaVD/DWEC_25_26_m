export default function createBookAPI(){

    let books = [];
    async function fetchAllBooks ()  {
        try{
            const response = await fetch("http://localhost:1492/books") 
            if (!response.ok){
                throw new Error('Error al hacer fetching');
            }
            const data = await  response.json();
            books = data;
            //console.log(data)
            return data;

        }catch (err){
            throw new Error('Error', err)
        }
    }

    function getBookById(id){
        return books.find(book => book.id === id);
    }

    return {
        fetchAllBooks,
        getBookById
    }
}