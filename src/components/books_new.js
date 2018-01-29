import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBook } from '../actions';

class BooksNew extends Component {
  constructor(props) {
    super();

    const { publisherId, authorId } = props.match.params;

  }

  renderField(field) {
    const className= `form-group ${field.meta.touched && field.meta.error
                                                      ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{ field.label }</label>
        <input
          className="form-control"
          type="text"
          { ...field.input }
        />
        <div className="text-help">
          { field.meta.touched ? field.meta.error : '' }
        </div>
      </div>
    );
  }

  onSubmit(values) {
    // pass an anonymous arrow function to createAuthor action creator
    // as a callback to be executed when post is completed
    this.props.createBook(values, () => {
      this.props.history.push(`/publishers/${this.publisherId}/authors/${this.authorId}/books`);
    });
  }

  render() {
    // pull handleSubmit off of props injected into AuthorsNew by ReduxForm
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <Field
          label="Book Title"
          name="bookTitle"
          component={ this.renderField }
        />
        <Field
          label="Book ASIN"
          name="bookAsin"
          component={ this.renderField }
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-danger" to={`/publishers/${this.publisherId}/authors/${this.authorId}/books`}>
          Cancel
        </Link>
      </form>
    );
  }
}

// whenever user hits enter key or submits form this will be called
function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.bookTitle) {
    errors.bookTitle = "Enter a Title!";
  }
  if (!values.bookAsin) {
    errors.bookAsin = "Enter an ASIN!";
  }

  // if errors empty, then form is fine to submit
  // If errors has *any* properties, form is invalid
  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'BooksNewForm'
  })(
  connect(null, { createBook })(BooksNew)
);
