import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PublisherDashboard extends Component {
  render() {
    return (
      <div>
        <h2>The Royalty Parser</h2>
        <p>Get started now.</p>
        <h3>Dashboard - Hello Ian!</h3>
        <div className="text-xs-left">
          <Link className="btn btn-primary" to="/authors">
            View Authors
          </Link>
        </div>
      </div>
    );
  }
}
