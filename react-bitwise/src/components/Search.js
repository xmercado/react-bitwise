import React from 'react';

export const Search = (props) => {
    return (
        <div>
            <input
                className='searchForm'
                value={props.value}
                onChange={(e) => props.setSearchTitle(e.target.value)}
                placeholder = 'Search for movie'
            />
        </div>
    );
};