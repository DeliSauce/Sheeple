import { connect } from 'react-redux';
import Homepage from './homepage';
import {updateFilter} from '../../actions/filter_actions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (field, value) => dispatch(updateFilter(field, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
