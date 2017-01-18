export const fetchTaskers = (filters) => {
  // debugger;
  return (
    $.ajax({
      method: 'GET',
      url: `api/taskers`,
      data: filters
    })
  );

};

// window.fetch = fetchTaskers;
