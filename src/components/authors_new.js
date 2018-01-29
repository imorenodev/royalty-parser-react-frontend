import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createAuthor } from '../actions';

class AuthorsNew extends Component {
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
    this.props.createAuthor(values, () => {
      this.props.history.push(`/publishers/${this.publisherId}/authors`);
    });
  }

  render() {
    // pull handleSubmit off of props injected into AuthorsNew by ReduxForm
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <Field
          label="Author's First Name"
          name="firstName"
          component={ this.renderField }
        />
        <Field
          label="Author's Last Name"
          name="lastName"
          component={ this.renderField }
        />
        <Field
          label="Author's Email Address"
          name="email"
          component={ this.renderField }
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-danger" to={`/publishers/${this.publisherId}/authors`}>
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
  if (!values.firstName) {
    errors.firstName = "Enter a First Name!";
  }
  if (!values.lastName) {
    errors.lastName = "Enter a Last Name!";
  }
  if (!values.email) {
    errors.email = "Enter an Email Address!";
  }

  // if errors empty, then form is fine to submit
  // If errors has *any* properties, form is invalid
  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'AuthorsNewForm'
  })(
  connect(null, { createAuthor })(AuthorsNew)
);
