import { useState, useEffect } from "react";
import { MovieDetails } from "./MovieDetails";
import MovieService from "../services/MovieService";
import UserMovieListService from "../services/UserMovieListService";
import { Search } from "./Search";
import { ListSort } from './ListSort';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';

import { ExtendedPagination } from "./Pagination";

export const MovieList= (props) => {
    const movieService = new MovieService();
    const userService = new UserMovieListService();
    const [movieList, setMovieList] = useState();
    const [selectedMovie, setSelectedMovie] = useState();
    const [searchTitle, setSearchTitle] = useState('');

    // const [sortedList, setSortedList] = useState();

    const getMoviesByTitle = async (searchTitle) => {
        const movie = await movieService.getMoviesByTitle(searchTitle);

        setMovieList(movie.Search);
    }

    // const sortedArr = myArr.sort((a, b) =>
    // a < b ? -1 : a > b ? 1 : 0);

    // const sortByYearRecent = () => {
    //     const sortedListRecent = movieList.sort((a, b) => 
    //     a.Year < b.Year ? -1 : a.Year > b.Year ? 1 : 0)
    //     .reverse();

    //     setMovieList([]);
    //     setMovieList(sortedListRecent);
    //     console.log('RECENT ', sortedListRecent);
    //     console.log('MOVIELIST ', movieList);
    // }

    // const sortByYearOldest = () => {
    //     const sortedListOldest = movieList.sort((a, b) => 
    //     a.Year < b.Year ? -1 : a.Year > b.Year ? 1 : 0);

    //     setMovieList(sortedListOldest);
    //     console.log('OLDEST ', sortedListOldest);
    //     console.log('MOVIELIST ', movieList);
    // }

    // const showSeriesOnly = () => {
    //     setMovieList(movieList.Type = 'series');
    // }

    useEffect(() => {
        getMoviesByTitle(searchTitle);
    }, [searchTitle]);

    const onClose = () => setSelectedMovie(null);

    return (
        <div>
            <div className='movie-search'>
                <Search searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
            </div>
            {!selectedMovie && movieList &&
                <div>
                    <ListSort movieList={movieList} setMovieList={setMovieList} />
            </div>}
            {!selectedMovie && movieList && 
                <div className='movie-card'>
                    <div>
                        {/* <Button
                        variant='primary'
                        onClick={() => sortByYearRecent()}>
                            Sort by recent
                        </Button>

                        <Button
                        variant='secondary'
                        onClick={() => sortByYearOldest()}>
                            Sort by oldest
                        </Button>

                        <Button
                        variant='primary'
                        onClick={() => showSeriesOnly()}>
                            Show series only
                        </Button> */}
                    </div>
                    {
                        movieList.map((movie) => (
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
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
            {/* {
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
                pageCount &&
                <ExtendedPagination pageCount = {pageCount}
                getMoviesByPage={getMoviesByPage}
                currentPage={currentPage} />
            } */}
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