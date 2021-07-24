import { useState, useEffect } from 'react';
import UserMovieListService from '../services/UserMovieListService';
import { MovieDetails } from './MovieDetails';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

export const UserMovieList = () => {
    const userMovieListService = new UserMovieListService();
    const [movieList, setMovieList] = useState();
    const [selectedMovie, setSelectedMovie] = useState();

    useEffect(() => {
        setUserMovieList();
    }, []);

    const setUserMovieList = () => {
        const UserMovieList = userMovieListService.getMovieList();

        setMovieList(UserMovieList);
    }

    const onClose = () => setSelectedMovie(null);

    return movieList ? (
        <div className='App'>
            <div className='movie-card'>
            {
                !selectedMovie && movieList && movieList.list.map((movie) => (
                    <div className='p-3 ml-2 mr-2'>
                        <img className='movie-img' src={movie.Poster} alt={`${movie.Title} poster`} />
                        <h2 className='movie-title'>{movie.Title}</h2>
                        <Button
                        variant='danger'
                        onClick={() => setSelectedMovie(movie.imdbID)}>
                        View details
                        </Button>
                    </div>
                ))
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
        </div>
        )
    : (
        <div className ='App'>
            <h2 className='text-center'>No movies added!</h2>
            <p className='text-center'>Click "Add to List" button to add a movie.</p>
        </div>
    );
};