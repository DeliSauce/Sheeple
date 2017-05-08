require 'rails_helper'

RSpec.describe User, type: :model do
  # let!(:user) { create(:user) }
  User.create!(username: 'test_user', password: 'password', email: 'test@example.com')

  describe 'validations' do
    it { should validate_presence_of(:username) }
    it { should validate_uniqueness_of(:username) }
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
  end

  describe 'associations' do
    it { should have_many(:tasks) }
    it { should have_many(:taskers) }
  end
end
