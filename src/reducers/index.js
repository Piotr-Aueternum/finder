import * as c from '../constants/actions';

/**
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
export default function data(state = {
  data: [],
  fetching: false,
  fetched: false,
}, action) {
  switch (action.type) {
    case c.FETCH_DATA: {
      return { fetchig: true };
    }
    case c.FETCHED_DATA: {
      return { data: action.payload, fetching: false, fetched: true };
    }
    default:
      return state;
  }
}
