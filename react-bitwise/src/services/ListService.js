import LocalStorageService from './localStorage.service';
import FlashMessageService from './flashMessage.service';

const localStorageService = new LocalStorageService();
const flashMessageService = new FlashMessageService();

export default class ListService {
    async addMovieToList(listId, movieID) {
        let listIndex;
        let movieLists = getMovieLists();
        let movieList = movieLists.filter((list, index) => {
            if (list.id === listId) listIndex = index;
            return list.id === listId;
        })[0];

        if (!movieList) {
            unableToAddFlashMessage();
            return { error: true };
        }

        movieList.list.push(movieID);
        movieLists.splice(listIndex, 1, movieList);
        setMovieLists(movieLists);

        if (checkAddMovieSuccess(listId)) {
            successfullyAddedFlashMessage();
            return { error: false };
        }
     
        unableToAddFlashMessage();
        return { error: true };
    }

    getListById(listId) {
        let movieLists = getMovieLists();

        if (!movieLists || movieLists.length === 0) {
            noListsAvailableFlashMesage();
            return { error: true, movieList: null };
        }

        let movieList = movieLists.filter(({ id }) => listId === id)[0];
        return { error: false, movieList };
    }

    createList(name, description) {
        const id = getNewListId();
        const list = {
            id,
            name,
            description,
            list: [],
        };

        let movieLists = getMovieLists();

        if (movieLists) {
            movieLists.push(list);
        } else {
            movieLists = [ list ];
        }

        setMovieLists(movieLists);

        if (!!getListById(id)) {
            successfullyCreatedListFlashMessage()
            return { error: false }
        }

        unableToCreateListFlashMessage();
        return { error: true }
    }
}

const getMovieLists = () => localStorageService.getItem("movieLists");
const setMovieLists = (list) => localStorageService.setItem("movieLists", list);

const checkAddMovieSuccess = (listId) => localStorage.getItem("movieLists").filter(({id}) => id === listId).length > 0;

const unableToAddFlashMessage = () => flashMessageService.flashMessage("error", "Unable to add movie to list.");
const successfullyAddedFlashMessage = () => flashMessageService.flashMessage("success", "Movie Successfully added.");
const unableToCreateListFlashMessage = () => flashMessageService.flashMessage("error", "Unable to create list.");
const successfullyCreatedListFlashMessage = () => flashMessageService.flashMessage("success", "List successfully created.");
const noListsAvailableFlashMesage = () => flashMessageService.flashMessage("failure", "No lists available, please create a list.");

const getNewListId = () => {
    let movieLists = getMovieLists();
    return movieLists
        ? movieLists.map(({id}) => id).sort((a, b) => a > b)[0] + 1
        : 1;
};

const getListById = (listId) => getMovieLists().filter(({ id }) => listId === id)[0];