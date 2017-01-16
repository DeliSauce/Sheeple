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

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
