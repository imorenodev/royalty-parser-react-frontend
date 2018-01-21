import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthorsReducer from './reducer_authors';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  authors: AuthorsReducer,
  books: BooksReducer,
  form: formReducer
});

export default rootReducer;
