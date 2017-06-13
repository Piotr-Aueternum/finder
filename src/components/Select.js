import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ name, options, onChange }) => (
  <select name={name} onChange={e => onChange(e)}>
    {options.map((option, key) => (
      <option key={key} value={option.value}>{option.label}</option>
    ))}
  </select>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
