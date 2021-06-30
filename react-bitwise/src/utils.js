//enter your own API key from OMDb API
const APIkey = "12345678";

export const fetchMovieData = async () => {
    await fetch("https://www.omdbapi.com/?s=star%20wars&apikey=9c4f8346")
    .then((data) => {
        console.log(data.json());
    }).catch((err) => {
        console.error(err);
    })
};

/* takes a string as input and uses
fetch and async/await to get an
array of movies with a matching
title from OMDb API */

// not working with async/await
export const getMoviesByName = (title) => {
    fetch(`https://www.omdbapi.com/?t=${title}&apikey=${APIKey}`)
    .then((data) => {
        console.log(data.json());
    }).catch((err) => {
        console.error(err);
    })
};

/* takes a valid OMDb movie id as
input and uses fetch and async/await
to get an object of detailed information
about the specified movie */

// not working with async/await
export const getMovieDetailsById = (id) => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${APIKey}`)
    .then((data) => {
        console.log(data.json());
    }).catch((err) => {
        console.error(err);
    })
};

/*
let myMovieList;

async function fetchMovieData() {
    const response = await fetch(`https://www.omdbapi.com/?s=star%20wars&apikey=9c4f8346`);
    myMovieList = response.json();
}

await fetchMovieData();
console.log(myMovieList);*/