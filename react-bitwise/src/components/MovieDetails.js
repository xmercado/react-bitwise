import { useState, useEffect } from "react";
import MovieService from "../services/MovieService";
import Button from 'react-bootstrap/Button';

export const MovieDetails = ({ id }) => {
    const[movie, setMovie] = useState();

    const movieService = new MovieService();

    useEffect(() => {
        getMovieById(id);
    }, [id])

    const getMovieById = async (id) => {
        const movie = await movieService.getMovieById(id);

        setMovie(movie);
    }

    return movie ? (
        <div className='p-3'>
            <div className='text-center'>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
            </div>
            <div>
                <div className='mt-2'>
                    <h2 className='text-center fw-bold'>{movie.Title}</h2>
                    <h2 className='text-end fw-bolder'>{movie.imdbRating}</h2>
                </div>
                <div className='mt-2'>
                    <Button className='btn-color' variant='danger'> {movie.Rated} </Button>{' '}
                    <Button className='btn-color' variant='danger'> {movie.Runtime}</Button>{' '}
                    <Button className='btn-color' variant='danger'> {movie.Genre} </Button>{' '}
                </div>
                <div className='mt-2'>
                    <h4>Plot</h4>
                    <p>{movie.Plot}</p>
                </div>
                <div className='mt-2'>
                    <h4>Actors</h4>
                    <p>{movie.Actors}</p>
                </div>
            </div>
        </div>
    )
    : (<h2>Loading...</h2>);
}