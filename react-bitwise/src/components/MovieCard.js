import Button from 'react-bootstrap/Button';
import UserMovieListService from '../services/UserMovieListService';

export const MovieCard = ({ movie, setSelectedMovie, addMovieToList }) => {
    const userService = new UserMovieListService();
    // const [selectedMovie, setSelectedMovie] = useState();

    return (
        <div className='mt-3 ml-2 mr-2' key={movie.imdbID}>
        <div>
            <img className='movie-img' src={movie.Poster} alt={`${movie.Title} poster`} />
        </div>
        <div className='p-3 mt-2'>
            <h2 className='fw-bold'>{movie.Title}</h2>
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
            {' '}<Button
            variant='light'
            onClick={() => userService.getMovieList()}>
            Get list
            </Button>
        </div>
    </div>
    );
};

