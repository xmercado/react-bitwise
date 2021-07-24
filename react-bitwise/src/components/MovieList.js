import { useState, useEffect } from "react";
import { MovieDetails } from "./MovieDetails";
import MovieService from "../services/MovieService";
import UserMovieListService from "../services/UserMovieListService";
import { Search } from "./Search";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';

export const MovieList= (props) => {
    const movieService = new MovieService();
    const userService = new UserMovieListService();
    const [movieList, setMovieList] = useState();
    const [selectedMovie, setSelectedMovie] = useState();
    const [searchTitle, setSearchTitle] = useState('');

    const getMoviesByTitle = async (searchTitle) => {
        const movie = await movieService.getMoviesByTitle(searchTitle);

        setMovieList(movie.Search);
    }

    useEffect(() => {
        getMoviesByTitle(searchTitle);
    }, [searchTitle]);

    const onClose = () => setSelectedMovie(null);

    return (
        <div>
            <div className='movie-search'>
                <Search searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
            </div>
            <div className='movie-card'>
            {!selectedMovie && movieList && movieList.map((movie) => (
                <div className='mt-3 ml-2 mr-2' key={movie.imdbID}>
                    <div>
                        <img className='movie-img' src={movie.Poster} alt={`${movie.Title} poster`} />
                    </div>
                    <div className='p-3 mt-2'>
                        <h2 className='movie-title'>{movie.Title}</h2>
                        <Button
                        variant='danger'
                        onClick={() => setSelectedMovie(movie.imdbID)}>
                        View details
                        </Button>
                        {' '}<Button
                        variant='light'
                        onClick={() => userService.addMovieToList(movie)}>
                        Add to list
                        </Button>
                        {/* {' '}<Button
                        variant='light'
                        onClick={() => userService.getMovieList()}>
                        Get list
                        </Button> */}
                    </div>
                </div>
            ))}
            </div>
            {
            !selectedMovie && movieList &&
            (<div className='d-flex align-items-center text-center'>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Ellipsis />
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>)
            }
            {
                selectedMovie && (
                    <Modal show={selectedMovie} onHide={onClose}>
                        <Modal.Header closeButton/>
                        <div>
                            <MovieDetails id={selectedMovie} />
                        </div>
                    </Modal>)
            }
        </div>
    );
}