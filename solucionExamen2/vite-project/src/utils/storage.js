const KEY = "watched_movies"

const save = (KEY, movies) => {
    localStorage.setItem(KEY, JSON.stringify(movies))
}

const getWatchedMovies = (KEY) => {
    const data = localStorage.getItem(KEY)
    if(!data){
        return [];
    }
    try{
        return JSON.parse(data)
    }catch (err){
        console.log(err)
        return [];
    }
}

const addWatchedMovie = (movieId) => {
    const movies = getWatchedMovies(KEY)
    if(!movies.includes(movieId)){
        movies.push(movieId)
        save(KEY, movies)
    }
    
}

// indexOf si no esta devuelve -1
// indexOf es buscar un valor dentro de array, en este caso busca el movieId 
// Y te dice en que posición está (1, 2, 3, 4 y -1 si no existe)
const removeWatchedMovies = (movieId) => {
    const movies = getWatchedMovies(KEY)
    const index = movies.indexOf(movieId) //Si si esta se borra: 
    if(index !== -1) {  // Esto es que indexOf lo ha encontrado
        movies.splice(index, 1)
        save(KEY, movies)
    }  
}

const isWatched = (movieId) => {
    const movies = getWatchedMovies(KEY)
    return movies.includes(movieId) // Esto ya retorna true o false
}

export const Storgae = {
    getWatchedMovies, 
    addWatchedMovie, 
    removeWatchedMovies, 
    isWatched
}


