import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Hidden = styled.span`
  display: none;
  font-size: 0.75em;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  td, th {
    width: calc(100% / 3);
    border: 1px solid #aaa;
  }
  th {
    background: #ddd;
    font-weight: 500;
  }
  &:hover {
    cursor: pointer;
    ${Hidden} {
      display: inline;
    }
  }
  caption {
    font-size: 1.25em;
    font-weight: 500;
    padding-bottom: 0.5em;
  }
`;

const Company = (props) => {
  const { name, categoryName, category, brand, brandName, date } = props;
  return (
    <Table>
      <caption>{name}</caption>
      <thead>
        <tr>
          <th>Category</th>
          <th>Brand</th>
          <th>Implementation date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{categoryName}<Hidden>({category})</Hidden></td>
          <td>{brandName}<Hidden>({brand})</Hidden></td>
          <td>{date}</td>
        </tr>
      </tbody>
    </Table>
  );
};

Company.propTypes = {
  name: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Company;
