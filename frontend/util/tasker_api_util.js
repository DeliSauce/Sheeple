export const fetchTaskers = (filters) => (
  $.ajax({
    method: 'GET',
    url: `api/taskers`,
    data: filters
  })
);
