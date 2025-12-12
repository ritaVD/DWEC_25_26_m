export const createMovieCard = (movie) => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    //identificar cada card con un nombre único
    card.dataset.movieId = movie.id;
    // ¿esta la card en el localStorage? 
    if(Storgae.isWatched(movie.id)){
        card.classList.add('movie-watched');  
    }
    
    //Poster
    const poster = document.createElement('img')
    poster.className = 'movie-poster';
    poster.src = `http://192.168.50.120${movie.poster_path}`;

    //Info de la película
    const info = document.createElement('div')
    info.className = 'movie-info';

    //Titulo
    const title = document.createElement('h3')
    title.className = 'movie-title';
    title.textContent = movie.title;

    //Rating de la pelicula
    const rating = document.createElement('h3')
    rating.className = 'movie-rating';
    rating.textContent = `⭐ ${movie.vote_average}`;

    //Esamblamos la carda
    info.appendChild(title);
    info.appendChild(rating);
    card.appendChild(poster);
    card.appendChild(info);

    //Eventos
    card.addEventListener('click', () => {
        if(card.classList.contains('movie-watched')){
            card.classList.remove('movie-watched')
            Storgae.removeWatchedMovies(movie.id)
        }else{
            card.classList.add('movie-watched')
            Storgae.addWatchedMovie(movie.id)
        }

    })

    card.addEventListener('dbclick', () => {
        card.remove();
    })

    card.addEventListener('contextmenu', () => {
        e.preventDefault();
        if (card.classList.contains('movie-watched')){
            card.classList.remove('movie-watched')
            Storgae.removeWatchedMovies(movie.id)
        }
        
    })
    


     
}

