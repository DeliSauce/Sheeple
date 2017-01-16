# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  tasker_id   :integer          not null
#  user_id     :integer          not null
#  date        :date             not null
#  description :text             not null
#  status      :string           not null
#  location    :string
#  latitude    :float
#  longitude   :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Task < ApplicationRecord
  validates :tasker_id, :user_id, :date, :description, :status, :location, presence: true

  belongs_to :user
  belongs_to :tasker
  # TODO replace location with latitude/longitude if doing geopositioning
  # validates :longitude, :latitude, presence: true
end
