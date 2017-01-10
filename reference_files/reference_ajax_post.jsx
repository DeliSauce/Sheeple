// ajax post to database, need to update username every time you run since the database will reject signup with the same username
$.ajax({
  method: 'POST',
  url: 'api/user',
  data: {user: {username: 'peter7', password: '123456', email: 'test@test'}}
}).then(user => console.log("hello",user));

$.ajax({
  method: 'POST',
  url: 'api/session',
  data: {user: {username: 'peter2', password: '123456'}}
}).then(user => console.log(user));

$.ajax({
  method: 'DELETE',
  url: 'api/session'
}).then(user => console.log(user));


let user = {user: {username: 'peter12', password: '123456', email: 'test@test'}}
store.dispatch(signup(user));

store.dispatch(login(user));
