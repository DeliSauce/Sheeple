export const fetchUserTasks = (id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/user',
    data: {id}
  });
};
