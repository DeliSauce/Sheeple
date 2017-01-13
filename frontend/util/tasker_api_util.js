export const fetchTaskers = () => (
  $.ajax({
    method: 'GET',
    url: `api/taskers`
  })
);
