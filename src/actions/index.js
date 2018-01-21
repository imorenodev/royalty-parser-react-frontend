import axios from 'axios';

export const FETCH_AUTHORS = 'FETCH_AUTHORS';
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const CREATE_AUTHOR = 'CREATE_AUTHOR';
export const CREATE_BOOK = 'CREATE_BOOK';

const ROOT_URL = 'http://localhost:8888/api/publishers/1';

export function fetchAuthors() {
  const request = axios.get(`${ROOT_URL}/`);

  return {
    type: FETCH_AUTHORS,
    payload: request
  };
}

export function fetchBooks() {
  const request = axios.get(`${ROOT_URL}/authors/1/books/`);

  return {
    type: FETCH_BOOKS,
    payload: request
  };
}

export function createAuthor(values, callback) {
  console.log(values);
  const request = axios.post(`${ROOT_URL}/authors/`, values)
    .then(() => callback());

  // return the action object
  return {
    type: CREATE_AUTHOR,
    payload: request
  };
}

export function createBook(values, callback) {
  console.log(values);
  const request = axios.post(`${ROOT_URL}/authors/1/books/`, values)
    .then(() => callback());

  // return the action object
  return {
    type: CREATE_BOOK,
    payload: request
  };
}
