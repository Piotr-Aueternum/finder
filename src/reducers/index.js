import * as c from '../constants/actions';
import data from '../data';

const initialState = {
  data,
  filters: {
    categories: 'cat_all',
    brands: 'brand_all',
    query: '',
  },
  selects: [{
    name: 'categories',
    options: [
      {
        value: 'cat_all',
        label: 'All categories',
      }, {
        value: 'cat_a',
        label: 'Category A',
      }, {
        value: 'cat_b',
        label: 'Category B',
      }, {
        value: 'cat_c',
        label: 'Category C',
      },
    ],
  }, {
    name: 'brands',
    options: [
      {
        value: 'brand_all',
        label: 'All brands',
      }, {
        value: 'brand_a',
        label: 'Brand A',
      }, {
        value: 'brand_b',
        label: 'Brand B',
      }, {
        value: 'brand_c',
        label: 'Brand C',
      },
    ],
  }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case c.FETCH_DATA: {
      return { fetchig: true };
    }
    case c.UPDATE_FILTERS: {
      return { ...state, filters: { ...state.filters, ...action.payload } };
    }
    default:
      return state;
  }
};
