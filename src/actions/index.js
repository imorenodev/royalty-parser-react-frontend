import axios from 'axios';

export const FETCH_AUTHORS = 'FETCH_AUTHORS';
export const FETCH_ASINS = 'FETCH_ASINS';
export const CREATE_AUTHOR = 'CREATE_AUTHOR';

const ROOT_URL = 'http://localhost:8888/api/publishers/3';

export function fetchAuthors() {
  const request = axios.get(`${ROOT_URL}/`);

  return {
    type: FETCH_AUTHORS,
    payload: request
  };
}

export function fetchAsins() {
  const request = axios.get(`${ROOT_URL}/authors/3/asins/`);

  return {
    type: FETCH_ASINS,
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
