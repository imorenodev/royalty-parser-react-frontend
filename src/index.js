import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// BrowserRouter tells react router to look at entire url
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import AuthorsIndex from './components/authors_index';
import BooksIndex from './components/books_index';
import BooksNew from './components/books_new';
import AuthorsNew from './components/authors_new';
import App from './components/app';
import PublisherDashboard from './components/publisher_dashboard';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )}>
    <BrowserRouter>
      <div>
        {/**Switch allows us to match ONLY the first route matched. */}
        <Switch>
          <Route path="/publishers/:publisherId/authors/:authorId/books/new" component={ BooksNew } />
          <Route path="/publishers/:publisherId/authors/:authorId/books" component={ BooksIndex } />
          <Route path="/publishers/:publisherId/authors/new" component={ AuthorsNew } />
          <Route path="/publishers/:publisherId/authors" component={ AuthorsIndex } />
          <Route path="/publishers/:publisherId" component={ PublisherDashboard } />
          <Route path="/" component={ App } />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
