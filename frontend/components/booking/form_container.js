import { connect } from 'react-redux';
import {submitTask} from '../../actions/task_actions';
import Form from './form';

const mapStateToProps = (state, ownProps) => ({
  filters: state.filters,
  tasker: ownProps.tasker
});

const mapDispatchToProps = (dispatch) => ({
  submitTask: (task) => dispatch(submitTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
