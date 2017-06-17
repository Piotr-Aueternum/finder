import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from './Select';
import media from '../style-utils';

const Form = styled.form`
  border-bottom: 1px solid #aaa;
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
`;

const Heading = styled.h1`
  width: 100%;
  font-size: 1.25em;
`;

const Input = styled.input.attrs({
  type: 'text',
})`
  width: 50%;
  ${media.tablet`
    width: 100%;
  `}
`;

export default class extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    selects: PropTypes.arrayOf(PropTypes.object).isRequired,
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
    this.setState({ data: { ...data, [name]: value }, timer: 3 });
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
    const { onSubmit, selects } = this.props;
    return (
      <Form onSubmit={e => onSubmit(e)}>
        <Heading>Filter Panel</Heading>
        <Input name="query" placeholder="Case sensitive name filter" onChange={e => onInputChange(e)} />
        {selects.map((item, key) => (
          <Select
            key={key}
            name={item.name}
            options={item.options}
            onChange={e => onSelectChange(e)}
          />
        ))}
      </Form>
    );
  }
}
