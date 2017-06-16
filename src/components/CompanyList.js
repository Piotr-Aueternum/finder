import React from 'react';
import PropTypes from 'prop-types';
import Company from './Company';

const CompanyList = ({ data }) => (
  <ul>
    {data.map((item, key) => (
      <li key={key}>
        <Company {...item} />
      </li>
    ))}
  </ul>
);

CompanyList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CompanyList;
