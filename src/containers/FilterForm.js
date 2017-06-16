import { connect } from 'react-redux';
import { updateFilters } from '../actions';
import Form from '../components/Form';

const mapStateToProps = state => ({
  inputs: state.inputs,
  options: state.options,
});


const mapDispatchToProps = dispatch => ({
  onChange: (e) => {
    const { value, name } = e.target;
    dispatch(updateFilters({ value, name }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
