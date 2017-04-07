import { connect } from 'react-redux';
import {updateFilter} from '../../actions/filter_actions';
import {toggleSessionForm} from '../../actions/modal_actions';
import Homepage from './homepage';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (field, value) => dispatch(updateFilter(field, value)),
  toggleSessionForm: () => dispatch(toggleSessionForm()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
