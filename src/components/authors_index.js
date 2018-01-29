import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAuthors, deleteAuthor } from '../actions';

class AuthorsIndex extends Component {
  constructor(props) {
    super();

    const { publisherId } = props.match.params;
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    if (this.props.authors) {
      this.props.fetchAuthors();
    }
  }

  onDeleteClick(e) {
    const { id } = e.target;
    this.props.deleteAuthor(id, () => {
      this.props.history.push(`/publishers/${this.publisherId}/authors`);
    });
  }

  renderAuthors() {
    const authors = this.props.authors;

    return Object.keys(authors).map( (id) => {
        return (
          <tr key={ id }>
            <td>
              { authors[id].firstName }
            </td>
            <td>
              { authors[id].lastName }
            </td>
            <td>
              { authors[id].email }
            </td>
            <td>
              <Link className="btn btn-primary" to={ `/publishers/${this.publisherId}/authors/${id}/books` }>
                View Books
              </Link>
            </td>
            <td>
              <button
                id={ id }
                className="btn btn-danger pull-xs-right"
                onClick={ this.onDeleteClick }
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
          <Link className="btn btn-primary" to={`/publishers/${this.publisherId}/authors/new`}>
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
          <Link className="btn btn-primary" to={`/publishers/${this.publisherId}`}>
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

export default connect(mapStateToProps, { fetchAuthors, deleteAuthor })(AuthorsIndex);
