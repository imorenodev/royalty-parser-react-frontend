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
import AuthorsNew from './components/authors_new';
import App from './components/app';
import PublisherDashboard from './components/publisher_dashboard';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        {/**Switch allows us to match ONLY the first route matched. */}
        <Switch>
          <Route path="/authors/new" component={ AuthorsNew } />
          <Route path="/authors" component={ AuthorsIndex } />
          <Route path="/publishers/:id" component={ PublisherDashboard } />
          <Route path="/books" component={ BooksIndex } />
          <Route path="/" component={ App } />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
