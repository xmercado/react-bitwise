import { MovieList } from './components/MovieList';
import './styles/Movie.css';

// import { connect } from 'react-redux';
// import { getMovieList } from './redux/actions/movieList.actions';
// import { useEffect } from 'react';

// let App = ({ movieList, getMovieList }) => 
let App = () => {
  // useEffect(() => {
  //   getMovieList();
  // }, [getMovieList])

  return (
    <div className="App">
      <MovieList />
      {/* {
        movieList && movieList.list && movieList.list.mapStateToProps((movie) => (
          <div key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{ movie.Title }</h3>
          </div>
        ))
      } */}
    </div>
  );
}

// const mapStateToProps = state => ({
//   movieList: state.movieListReducer,
// });

// App = connect(
//   mapStateToProps,
//   { getMovieList }
// )(App)

export default App;
