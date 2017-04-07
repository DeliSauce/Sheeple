export const createTask = (task) => (
  $.ajax({
    method: 'POST',
    url: 'api/tasks',
    data: task
  })
);

export const deleteTask = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/tasks/${id}`
  })
);

export const fetchTasks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/tasks'
  })
);
