export default class LocalStorageService {
    getItem(itemName) {
        return JSON.parse(localStorage.getItem(itemName));
    }

    setItem(itemName, value) {
        return localStorage.setItem(itemName, JSON.stringify(value));
    }
}