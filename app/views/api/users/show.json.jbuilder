json.extract! @user, :id, :username

# # json.partial! "api/users/user", user: @user
# json.array! @user.tasks do |task|
#   json.id task.id
#   # json.first_name tasker.first_name
#   # json.last_name tasker.last_name
#   json.date task.date
#   json.location task.location
#   json.description task.description
#   json.status task.status
#   json.tasker task.tasker
# end
