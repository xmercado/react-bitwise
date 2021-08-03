import Button from 'react-bootstrap/Button';

export const Sidebar = () => {
    const sortByYearRecent = (movie) => {
        //sort movie by recent
    }

    const sortByYearOldest = (movie) => {
        //sort movie by oldest
    }

    const sortMovieList = ({ keyName, ascending }) => {
     console.log( keyName, ascending); 
    }

    return (
        <div>
            {/* <Button
            variant='primary'
            onClick={() => sortByYearRecent()}>
                Sort by recent
            </Button>

            <Button
            variant='primary'
            onClick={() => sortByYearOldest()}>
                Sort by oldest
            </Button> */}

            <select onChange={(e) => sortMovieList(e.target.value)}>
                <option disabled={true} default>Sort List</option>
                <option value={{ keyName: 'Year', ascending: true }}>Year - Recent</option>
                <option value={{ keyName: 'Year', ascending: false }}>Year - Oldest</option>
            </select>
        </div>
    )
}