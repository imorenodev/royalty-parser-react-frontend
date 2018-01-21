import axios from 'axios';

export const FETCH_AUTHORS = 'FETCH_AUTHORS';
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const CREATE_AUTHOR = 'CREATE_AUTHOR';
export const CREATE_BOOK = 'CREATE_BOOK';
export const DELETE_AUTHOR = 'DELETE_AUTHOR';
export const DELETE_BOOK = 'DELETE_BOOK';

const ROOT_URL = 'http://localhost:8888/api/publishers/1';

export function fetchAuthors() {
  const request = axios.get(`${ROOT_URL}/`);

  return {
    type: FETCH_AUTHORS,
    payload: request
  };
}

export function fetchBooks() {
  const request = axios.get(`${ROOT_URL}/authors/9/books/`);

  return {
    type: FETCH_BOOKS,
    payload: request
  };
}

export function createAuthor(values, callback) {
  const request = axios.post(`${ROOT_URL}/authors/`, values)
    .then(() => callback());

  // return the action object
  return {
    type: CREATE_AUTHOR,
    payload: request
  };
}

export function createBook(values, callback) {
  const request = axios.post(`${ROOT_URL}/authors/9/books/`, values)
    .then(() => callback());

  // return the action object
  return {
    type: CREATE_BOOK,
    payload: request
  };
}

export function deleteAuthor(id, callback) {
  const request = axios.delete(`${ROOT_URL}/authors/${id}`)
    .then(() => callback());

  return {
    type: DELETE_AUTHOR,
    payload: id
  }
}

export function deleteBook(id, callback) {
  const request = axios.delete(`${ROOT_URL}/authors/9/books/${id}`)
    .then(() => callback());

  return {
    type: DELETE_BOOK,
    payload: id
  }
}
