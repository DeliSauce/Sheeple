require 'rails_helper'

RSpec.describe User, type: :model do
  before(:each) do
    User.create!(username: 'test', password: 'password', email: 'test@example.com')
  end

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
