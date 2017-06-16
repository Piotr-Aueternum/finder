import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

const categories = [];

const brands = [];

export default class extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }
  render() {
    const { onSubmit } = this.props;
    return (
      <div>
        <h1>Filter Panel</h1>
        <form onSubmit={e => onSubmit(e)}>
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
  }
}
