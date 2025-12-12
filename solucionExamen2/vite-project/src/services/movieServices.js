const moviesCache = [] //Array vacio donde guardamos las peliculas del backend
const URL = "http://192.168.50.120:1492/api/movies" //URL donde se piden las peliculas
const fetchMovies = async () => {
    try {
        const response = await fetch(URL)
        if (!response.ok){
            throw new Error('Error en el fetching')
        }
        //const data = await response.json();
        //vaciar disque
        //moviesCache.length = 0; 
        moviesCache.push(...data.results); //rellenamos el array
        //moviesCache =  data.results; //ojo con esto y isaias y sus datas 
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