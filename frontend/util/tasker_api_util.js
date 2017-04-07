export const fetchTaskers = (filters) => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/taskers`,
      data: filters
    })
  );
};
