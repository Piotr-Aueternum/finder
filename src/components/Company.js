import React from 'react';
import PropTypes from 'prop-types';

const Company = (props) => {
  const { name, categoryName, brandName, date } = props;
  return (
    <table>
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
          <td>{categoryName}</td>
          <td>{brandName}</td>
          <td>{date}</td>
        </tr>
      </tbody>
    </table>
  );
};

Company.propTypes = {
  name: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Company;
