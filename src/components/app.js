import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>The Royalty Parser</h2>
        <p>Get started now.</p>
        <div className="text-xs-left">
          <Link className="btn btn-primary" to="/publishers/1">
            Login Now!
          </Link>
        </div>
      </div>
    );
  }
}
