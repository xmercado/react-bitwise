const initialState = null;

const movieListReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_MOVIE_LIST': {
            const movieList = localStorage.getItem('movieList');
            return movieList 
                ? JSON.parse(movieList)
                : state;
        }
        default:
            return state;
    }
}

export default movieListReducer;