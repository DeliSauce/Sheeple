export const checkUserName = (user) => {
  return $.ajax({
    method: 'GET',
    url: '/api/user/checkusername',
    data: user
  });
};
