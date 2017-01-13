@taskers.each do |tasker|
  json.set! tasker.id do
    json.extract! tasker, :first_name, :last_name, :description, :rate, :auto_book, :skill, :location, :longitude, :latitude
  end
end
