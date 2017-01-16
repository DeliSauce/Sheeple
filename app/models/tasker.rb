# == Schema Information
#
# Table name: taskers
#
#  id               :integer          not null, primary key
#  first_name       :string           not null
#  last_name        :string           not null
#  username         :string           not null
#  email            :string           not null
#  profile_img_link :string           default("http://res.cloudinary.com/delisauce/image/upload/v1484337646/default-profile-img_c1ir5w.png"), not null
#  description      :text             not null
#  rate             :integer          not null
#  auto_book        :boolean          default("false"), not null
#  skill            :string           not null
#  location         :string
#  latitude         :float
#  longitude        :float
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Tasker < ApplicationRecord
  validates :first_name, :last_name, :username, :email, :description, :rate, :location, presence: true
  # TODO replace location with latitude/longitude if doing geopositioning
  # validates :longitude, :latitude, presence: true
  # TODO possibly add auto_book feature
  # validates :auto_book, inclusion: [true, false]
  validates :skill, presence: true, inclusion: ['standing', 'sitting', 'wandering']

  has_many :tasks
  #TODO if I want to allow taskers to have multiple skills I'll either have to create another table + join table (ala movies, actors, castings)(tasker creation would be tricky -- entry in the skills table would rely on tasker_id from the new entry in the tasker table -- how to do both simultaneously) or look at the todo list taggings project
  # has_many :skills

end
