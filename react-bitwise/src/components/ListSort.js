import { useState, useEffect } from 'react';

export const ListSort = (props) => {
    const [sortedList, setSortedList] = useState({keyName: '', ascending: false});

    const sortMovieList = ({ keyName, ascending }) => {
    // const sortedArr = myArr.sort((a, b) =>
    // a < b ? -1 : a > b ? 1 : 0);
        const sortValue = sortedList.keyName;
        const sortList = [...props.movieList].sort((a, b) => 
        a[sortValue] < b[sortValue] ? -1 : a[sortValue] > b[sortValue] ? 1 : 0);

        if (ascending) {
            sortList.reverse();
        }

        props.setMovieList(sortList);
        

        console.log('SORT LIST ', sortList);
        console.log('SORTED LIST STATE ', sortedList);
        console.log('MOVIE LIST ', props.movieList);
    }

    useEffect(() => {
        sortMovieList(sortedList)
    }, [sortedList])

    return (
        <div>
            <select onChange={(e) => setSortedList(e.target.value)}>
                <option disabled={true} default>Sort List</option>
                <option value={{ keyName: 'Year', ascending: true }}>Year - Recent</option>
                <option value={{ keyName: 'Year', ascending: false }}>Year - Oldest</option>
                <option value={{ keyName: 'Title', ascending: false }}>Title</option>
            </select>
        </div>
    )
}