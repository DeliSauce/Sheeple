# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# don't actually need this
# require 'factory_girl_rails'

User.create({username: "GUEST", password: "password", email: "guest@example.com"})

#include latitude/longitude if
Tasker.create({
  first_name: "John",
  last_name: "Doe",
  username: "JD3000",
  email: "jd3000@example.com",
  description: "I havent held a job for 10 years and live in my mothers basement. So...Im pretty good at sitting around and doing nothing.",
  rate: 10,
  auto_book: true,
  skill: "sitting",
  location: "SF",
  latitude: 37.773972,
  longitude: -122.431297
})

Tasker.create({
  first_name: "Jane",
  last_name: "Johson",
  username: "sparklecat",
  email: "sparklecat@example.com",
  description: "I once stood in line for 10 hours just to get Justin Bieber tickets.",
  rate: 15,
  auto_book: false,
  skill: "standing",
  location: "NY",
  latitude: 40.7128,
  longitude: -74.0059
})

  FactoryGirl.define do
    factory :tasker do
      first_name {Faker::Name.first_name}
      last_name {Faker::Name.last_name}
      username {"#{first_name.downcase}#{rand(100.999)}_#{last_name}"}
      email {"#{first_name}.#{last_name}@example.com".downcase}
      description 'placeholder description'
      rate {Faker::Number.between(0,30)}
      auto_book {[false, true].sample}
      skill {['sitting', 'standing', 'wandering'].sample}
      location {['NY', 'SF'].sample}
      longitude {Faker::Address.longitude}
      latitude {Faker::Address.latitude}
    end
  end

  100.times do
    FactoryGirl.create(:tasker)
  end
  # email {Faker::Internet.email}
# password {Faker::Number.number(1,2)}
