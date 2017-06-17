import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../style-utils';

const Select = styled.select`
  width: 25%;
  ${media.tablet`
    width: 50%;
  `}
`;
const SelectComponent = ({ name, options, onChange }) => (
  <Select name={name} onChange={e => onChange(e)}>
    {options.map((option, key) => (
      <option key={key} value={option.value}>{option.label}</option>
    ))}
  </Select>
);

SelectComponent.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectComponent;
