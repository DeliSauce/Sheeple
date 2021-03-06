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

require 'test_helper'

class TaskerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
