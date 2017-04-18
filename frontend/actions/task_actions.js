import * as TaskAPIUtil from '../util/task_api_util';

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const REMOVE_TASK = "REMOVE_TASK";
export const CLEAR_TASKS = "CLEAR_TASKS";

export const receiveTasks = (tasks) => ({
  type: RECEIVE_TASKS,
  tasks
});

export const removeTask = (task) => ({
  type: REMOVE_TASK,
  task
});

export const clearTasks = (task) => ({
  type: CLEAR_TASKS
});

export const fetchTasks = () => (dispatch) => {
  TaskAPIUtil.fetchTasks().then((tasks) => dispatch(receiveTasks(tasks)));
};

export const deleteTask = (taskId) => (dispatch) => (
  TaskAPIUtil.deleteTask(taskId).then((task) => dispatch(removeTask(task)))
);
