import { connect } from 'react-redux';
import { updateFilters } from '../actions';
import Form from '../components/Form';

const mapStateToProps = state => ({
  selects: state.selects,
});


const mapDispatchToProps = dispatch => ({
  formSubmit: (data) => {
    dispatch(updateFilters({ ...data }));
  },
  onSubmit: (data) => {
    dispatch(updateFilters({ ...data }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
