import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks, deleteBook } from '../actions';

class BooksIndex extends Component {
  constructor(props) {
    super();

    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    if (this.props.books) {
      this.props.fetchBooks();
    }
  }

  onDeleteClick(e) {
    const { id } = e.target;
    const { publisherId, authorId } = this.props.match.params;

    this.props.deleteBook(id, () => {
      this.props.history.push(`/publishers/${publisherId}/authors/${authorId}/books`);
    });
  }

  renderBooks() {
    const books = this.props.books;

    return Object.keys(books).map( (index) => {
        return (
          <tr key={ index }>
            <td>
              { books[index].bookTitle }
            </td>
            <td>
              { books[index].bookAsin }
            </td>
            <td>
              <button
                id={ index }
                className="btn btn-danger pull-xs-right"
                onClick={ this.onDeleteClick }
                >
                Delete Book
              </button>
            </td>
          </tr>
        );
    });
  }

  render() {
    if (!this.props.books) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    const { publisherId, authorId } = this.props.match.params;

    return (
      <div>
        <h3>Books List</h3>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to={`/publishers/${publisherId}/authors/${authorId}/books/new`}>
            Add a Book
          </Link>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Book ASIN</th>
              <th className="text-xs-right">Delete</th>
            </tr>
          </thead>
          <tbody>
            { this.renderBooks() }
          </tbody>
        </table>
        <div className="text-xs-left">
          <Link className="btn btn-primary" to={`/publishers/${publisherId}/authors`}>
            Back to Author Index
          </Link>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { books: state.books };
}

export default connect(mapStateToProps, { fetchBooks, deleteBook })(BooksIndex);
