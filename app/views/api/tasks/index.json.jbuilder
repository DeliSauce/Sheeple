json.array! @tasks do |task|
  json.id task.id
  json.date task.date
  json.location task.location
  json.description task.description
  json.status task.status
  json.tasker task.tasker
end
