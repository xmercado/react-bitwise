// import MovieService from "./MovieService";

// const movieService = new MovieService();

export default class UserMovieListService {
    //change movie to id
    addMovieToList(movie) {
        // const movie = await movieService.getMovieById(id);

        let movieList = localStorage.getItem('movieList');
        console.log(movieList);
        if (movieList) {
            movieList = JSON.parse(movieList);
            movieList.list.push(movie);
        };
        if (!movieList) movieList = { list: [ movie ] };
        localStorage.setItem('movieList', JSON.stringify(movieList));
    }
    getMovieList() {
        let movieList = localStorage.getItem('movieList');
        if (!movieList) return null;
        return JSON.parse(movieList);
    }

    removeMovieFromList(id) {
        const movieList = JSON.parse(localStorage.getItem('movieList'));
        const updatedList = movieList.list.filter((movie) => movie.imdbID !== id);

        movieList.list = updatedList;
        localStorage.setItem('movieList', JSON.stringify(movieList));
    }
}