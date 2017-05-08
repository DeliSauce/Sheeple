require 'rails_helper'

RSpec.describe User, type: :model do
  # let!(:user) { create(:user) }

  describe 'validations' do
    it {should validate_presence_of(:username)}
    it {should validate_uniqueness_of(:username) }
    it {should validate_presence_of(:email)}
  end

  describe 'associations' do
    it {should have_many(:tasks)}
    it {should have_many(:taskers)}
  end
end

# describe BasketballTeam do
#   it { should validate_presence_of(:name) }
#   it { should validate_uniqueness_of(:name) }
#   it { should ensure_inclusion_of(:name).in_array(["Cavaliers", "Suns", "Mavericks"])} #etc..
# end
#
# describe BasketballTeam do
#   describe "associations" do
#     # "it" refers to an instance of the BasketballTeam class here
#     # because we have not explicitly specified a subject
#     it { should have_many(:basketball_players)}
#     it { should have_one(:owner)}
#   end
# end
