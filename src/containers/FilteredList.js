import { connect } from 'react-redux';
import CompanyList from '../components/CompanyList';

const mapStateToProps = state => ({
  data: state.data,
});

export default connect(mapStateToProps)(CompanyList);
