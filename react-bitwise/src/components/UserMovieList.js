import { useState, useEffect } from 'react';
import UserMovieListService from '../services/UserMovieListService';
import { MovieDetails } from './MovieDetails';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

export const UserMovieList = () => {
    const userMovieListService = new UserMovieListService();
    const [movieList, setMovieList] = useState();
    const [selectedMovie, setSelectedMovie] = useState();
    const [showModal, setShowModal] = useState(false);
    const [deletedMovie, setDeletedMovie] = useState();

    useEffect(() => {
        setUserMovieList();
    }, []);

    const setUserMovieList = () => {
        const UserMovieList = userMovieListService.getMovieList();

        setMovieList(UserMovieList);
    }

    const onClose = () => setSelectedMovie(null);

    const onCloseDelete = () => {setShowModal(false); setSelectedMovie(null);}

    const setDeleteModal = (id) => {
        setDeletedMovie(id);
        setShowModal(true);
    }

    const confirmDeleteModal = (id) => {
        return(
        <Modal show={!!deletedMovie} onHide={onCloseDelete}>
            <Modal.Body>
                Are you sure you would like to remove this movie from the list?
            </Modal.Body>
            <Modal.Footer>
                <Button variant='danger' onClick={() => deleteMovieFromList(id)}>Yes</Button>
                {' '}<Button variant='light' onClick={onCloseDelete}>No</Button>
            </Modal.Footer>
        </Modal>
        )
    }

    const deleteMovieFromList = (id) => {
        userMovieListService.removeMovieFromList(id);
        setUserMovieList();
        onCloseDelete();
    }

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
                        {' '}{deleteMovieFromList && <Button
                        variant='light'
                        onClick={() => setDeleteModal(movie.imdbID)}>
                        Remove from list
                        </Button>}
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
            {
                showModal && (
                    <div>
                        {confirmDeleteModal(deletedMovie)}
                    </div>)
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