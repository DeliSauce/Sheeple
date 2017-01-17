
json.array! @taskers, :id, :first_name, :last_name, :description, :profile_img_link, :rate, :auto_book, :skill, :location, :longitude, :latitude

# @taskers.each do |tasker|
#   json.set! tasker.id do
#     json.extract! tasker, :first_name, :last_name, :description, :profile_img_link, :rate, :auto_book, :skill, :location, :longitude, :latitude
#   end
# end
