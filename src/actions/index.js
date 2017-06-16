import * as c from '../constants/actions';

export const updateFilters = payload => ({
  type: c.UPDATE_FILTERS,
  payload,
});

export default updateFilters;
