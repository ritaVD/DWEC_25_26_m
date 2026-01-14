let moviesCache = [] //Array vacio donde guardamos las peliculas del backend
const URL = "http://localhost:1492/movies" //URL donde se piden las peliculas
const fetchMovies = async () => {
    try {
        const response = await fetch(URL)
        if (!response.ok){
            throw new Error('Error en el fetching')
        }
        const data = await response.json(); 
        
        moviesCache =  data;  
        return moviesCache;
    }catch (err){
        console.log(err)
        
    }
}

const getMovies = () => {
    return [...moviesCache]
}

const getMovieId = (movieId) => {
    return moviesCache.find(movie => movie.id === movieId)
}
export const MovieServices = {
    fetchMovies,
    getMovies,
    getMovieId
}