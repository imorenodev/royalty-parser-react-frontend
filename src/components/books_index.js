import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../actions';

class BooksIndex extends Component {
  componentDidMount() {
    if (this.props.books) {
      this.props.fetchBooks();
    }
  }

  onDeleteClick() {

  }

  renderBooks() {
    const books = this.props.books;
    console.log(Object.keys(books));
    console.log(books);

    return Object.keys(books).map( (index) => {
        return (
          <tr>
            <td>
              { books[index].bookTitle }
            </td>
            <td>
              { books[index].bookAsin }
            </td>
            <td>
              <button
                className="btn btn-danger pull-xs-right"
                onClick={ this.onDeleteClick.bind(this) }
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
    return (
      <div>
        <h3>Books List</h3>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/books/new">
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
          <Link className="btn btn-primary" to="/authors">
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

export default connect(mapStateToProps, { fetchBooks })(BooksIndex);
