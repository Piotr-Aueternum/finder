import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

export default class extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
    formSubmit: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = { timer: 0, data: {} };
    this.onSubmit = this.onSubmit.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }
  onInputChange(e) {
    const { name, value } = e.target;
    const { data } = this.state;
    this.setState({ data: { ...data, [name]: value }, timer: 5 });
    clearTimeout(this.countdown);
    this.tick();
  }
  onSelectChange(e) {
    const { name, value } = e.target;
    const { formSubmit } = this.props;
    this.setState({ data: { ...this.state.data, [name]: value }, timer: 0 });
    clearTimeout(this.countdown);
    setTimeout(() => formSubmit(this.state.data));
  }
  tick() {
    const { timer } = this.state;
    const { formSubmit } = this.props;
    this.countdown = setTimeout(() => {
      this.setState({ timer: timer - 1 });
      if (timer > 0) {
        this.tick();
      } else {
        clearTimeout(this.countdown);
        setTimeout(() => formSubmit(this.state.data));
      }
    }, 1000);
  }
  render() {
    const { onSelectChange, onInputChange } = this;
    const { onSubmit, inputs } = this.props;
    return (
      <form onSubmit={e => onSubmit(e)}>
        <h1>Filter Panel</h1>
        <input type="text" name="query" placeholder="Case sensitive name filter" onChange={e => onInputChange(e)} />
        {inputs.map((item, key) => (
          <Select
            key={key}
            name={item.name}
            options={item.options}
            onChange={e => onSelectChange(e)}
          />
        ))}
      </form>
    );
  }
}
