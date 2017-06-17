import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Company from './Company';

const Item = styled.li`
  margin: 0;
  padding: 15px 0;
  list-style: none;
  border-bottom: 1px solid #aaa;
`;
const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
`;

export default class extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    filters: PropTypes.objectOf(PropTypes.string).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      data: [...this.props.data],
    };
  }
  componentWillReceiveProps(nextProps) {
    const { data, filters } = nextProps;
    const arr = [...data];
    const filteredArr = arr.filter((item) => {
      const { brands, categories, query } = filters;
      let { brand, category } = item;

      const constainsQuery = item.name.toLowerCase().includes(query.toLowerCase());

      brand = brands === 'brand_all' ? brands : brand;
      category = categories === 'cat_all' ? categories : category;

      let contains = false;
      if (brand === brands && category === categories && constainsQuery) {
        contains = true;
      }
      return contains;
    });
    this.setState({ data: [...filteredArr] });
  }
  render() {
    const { data } = this.state;
    if (data.length === 0) {
      return (<div>No data found.</div>);
    }
    return (
      <UnorderedList>
        {data.map((item, key) => (
          <Item key={key}>
            <Company {...item} />
          </Item>
        ))}
      </UnorderedList>
    );
  }
}
