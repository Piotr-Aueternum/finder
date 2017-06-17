import React from 'react';
import styled from 'styled-components';
import FilterForm from '../containers/FilterForm';
import FilteredList from '../containers/FilteredList';

const Container = styled.div`
  max-width: 470px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  background-color: #eee;
`;

export default () => (
  <main>
    <Container>
      <FilterForm />
      <FilteredList />
    </Container>
  </main>
);
