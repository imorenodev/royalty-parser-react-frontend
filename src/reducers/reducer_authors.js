import _ from 'lodash';
import { FETCH_AUTHORS, DELETE_AUTHOR } from '../actions';

function mapKeys(data) {
  return data.reduce( (acc, val) => Object.assign(acc, {[val['id']] : val}), {});
}

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_AUTHORS :
        return mapKeys(action.payload.data.authors);

    /*
    case FETCH_POST :
      //const post = action.payload.data;
      //const newState = { ...state };
      //newState[post.id] = post;
      //return newState;
      return { ...state, [action.payload.data.id]: action.payload.data};
      */

    case DELETE_AUTHOR :
      return _.omit(state, action.payload);

    default:
      return state;
  }
}
