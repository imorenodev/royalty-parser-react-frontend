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

  onDeleteClick() {

  }

  renderAuthors() {
    const authors = this.props.authors;

    return Object.keys(authors).map( (index) => {
        return (
          <tr>
            <td>
              { authors[index].firstName }
            </td>
            <td>
              { authors[index].lastName }
            </td>
            <td>
              { authors[index].email }
            </td>
            <td>
              <Link className="btn btn-primary" to={ `/books` }>
                View Books
              </Link>
            </td>
            <td>
              <button
                className="btn btn-danger pull-xs-right"
                onClick={ this.onDeleteClick.bind(this) }
                >
                Delete Author
              </button>
            </td>
          </tr>
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

        <table className="table table-hover">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>View Books</th>
              <th className="text-xs-right">Delete Author</th>
            </tr>
          </thead>
          <tbody>
            { this.renderAuthors() }
          </tbody>
        </table>

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
