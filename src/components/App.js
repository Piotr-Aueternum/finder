import React from 'react';
import FilterForm from '../containers/FilterForm';

export default () => (
  <main>
    <FilterForm
      onSubmit={e => console.log(e)}
    />
  </main>
);
