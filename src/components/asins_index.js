import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsins } from '../actions';

class AsinsIndex extends Component {
  componentDidMount() {
    if (this.props.asins) {
      this.props.fetchAsins();
    }
  }

  onDeleteClick() {

  }

  renderAsins() {
    const asins = this.props.asins;
    console.log(Object.keys(asins));
    console.log(asins);

    return Object.keys(asins).map( (index) => {
        return (
          <tr>
            <td>
              { asins[index].bookTitle }
            </td>
            <td>
              { asins[index].bookAsin }
            </td>
            <td>
              <button
                className="btn btn-danger pull-xs-right"
                onClick={ this.onDeleteClick.bind(this) }
                >
                Delete ASIN
              </button>
            </td>
          </tr>
        );
    });
  }

  render() {
    if (!this.props.asins) {
      return (
        <div>
          Loading...
        </div>
      );
    }
    return (
      <div>
        <h3>Asins List</h3>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/asins/new">
            Add an Asin
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
            { this.renderAsins() }
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
  return { asins: state.asins };
}

export default connect(mapStateToProps, { fetchAsins })(AsinsIndex);
