import { connect } from 'react-redux';
import Dashboard from './dashboard';
import {fetchTasks, deleteTask} from '../../actions/task_actions';

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  userId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  fetchTasks: (userId) => dispatch(fetchTasks(userId)),
  deleteTask: (taskId) => dispatch(deleteTask(taskId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
