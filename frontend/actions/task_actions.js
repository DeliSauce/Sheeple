import * as DashboardAPIUtil from '../util/dashboard_api_util';
import * as TaskAPIUtil from '../util/task_api_util';

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const REMOVE_TASK = "REMOVE_TASK";

export const receiveTasks = (tasks) => ({
  type: RECEIVE_TASKS,
  tasks
});

export const removeTask = (task) => ({
  type: REMOVE_TASK,
  task
});


// export const fetchTasks = (userId) => (dispatch) => (
//   TaskAPIUtil.fetchTasks().then((tasks) => dispatch(receiveTasks(tasks)))
// );
// export const fetchTasks = (userId) => (dispatch) => (
//   DashboardAPIUtil.fetchUserTasks(userId).then((tasks) => dispatch(receiveTasks(tasks)))
// );
export const fetchTasks = (userId) => (dispatch) => (
  TaskAPIUtil.fetchTasks().then(
    (tasks) => {
      console.log("these are the tasks: ", tasks);
      dispatch(receiveTasks(tasks));
    },
    (errors) => console.log("couldn't receive tasks: ", errors)
  )
);

// (
//   (success) => successCallback(),
//   (errors) => dispatch(receiveBookingErrors(errors.responseJSON))
// )


// DashboardAPIUtil.fetchUserTasks(userId).then((success) => console.log(success))

export const deleteTask = (taskId) => (dispatch) => (
  TaskAPIUtil.deleteTask(taskId).then((task) => dispatch(removeTask(task)))
);
