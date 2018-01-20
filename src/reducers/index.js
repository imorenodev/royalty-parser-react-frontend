import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthorsReducer from './reducer_authors';
import AsinsReducer from './reducer_asins';

const rootReducer = combineReducers({
  authors: AuthorsReducer,
  asins: AsinsReducer,
  form: formReducer
});

export default rootReducer;
