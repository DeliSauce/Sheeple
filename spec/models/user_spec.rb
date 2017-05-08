require 'rails_helper'

RSpec.describe User, type: :model do
  #Needed for uniqueness validation (replaced by 'let', will not persist user to database)
  # before(:each) do
  #   User.create!(username: 'test', password: 'password', email: 'test@example.com')
  # end

  describe 'validations' do
    let!(:user) { User.create!(username: 'test', password: 'password', email: 'test@example.com') }
    it { should validate_presence_of(:username) }
    it { should validate_uniqueness_of(:username) }
    it { should validate_presence_of(:email) }
    it { should validate_length_of(:password).is_at_least(6) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
  end

  describe 'associations' do
    it { should have_many(:tasks) }
    it { should have_many(:taskers) }
  end
end
