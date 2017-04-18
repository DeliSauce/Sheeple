export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/user',
    data: user
  });
};

export const checkUserName = (user) => {
  return $.ajax({
    method: 'GET',
    url: '/api/user/checkusername',
    data: user
  });
};
