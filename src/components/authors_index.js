import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAuthors } from '../actions';

class AuthorsIndex extends Component {
  componentDidMount() {
    if (this.props.authors) {
      this.props.fetchAuthors();
    }
  }

  renderAuthors() {
    const authors = this.props.authors;

    return Object.keys(authors).map( (index) => {
        return (
          <li className="list-group-item" key={ authors[index].id }>
            <Link to={ `/asins` }>
            { authors[index].firstName }
            </Link>
          </li>
        );
    });
  }

  render() {
    if (!this.props.authors) {
      return (
        <div>
          Loading...
        </div>
      );
    }
    return (
      <div>
        <h3>Authors List</h3>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/authors/new">
            Add an Author
          </Link>
        </div>
        <ul className="list-group">
          { this.renderAuthors() }
        </ul>
        <div className="text-xs-left">
          <Link className="btn btn-primary" to="/publishers/3">
            Back to Dashboard
          </Link>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authors: state.authors };
}

export default connect(mapStateToProps, { fetchAuthors })(AuthorsIndex);
