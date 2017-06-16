import { connect } from 'react-redux';
import { updateFilters } from '../actions';
import Form from '../components/Form';

const mapStateToProps = state => ({
  inputs: state.inputs,
});


const mapDispatchToProps = dispatch => ({
  formSubmit: (data) => {
    dispatch(updateFilters({ ...data }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
