import React from 'react';
import Select from './Select';

const categories = [{
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
}];

const brands = [{
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
}];


const Search = () => (
  <div>
    <h1>Filter Panel</h1>
    <form>
      <input type="text" placeholder="Case sensitive name filter" />
      <Select
        name="categories"
        options={categories}
        onChange={e => (e.target.value)}
      />
      <Select
        name="brands"
        options={brands}
        onChange={e => (e.target.value)}
      />
    </form>
  </div>
);

export default Search;
