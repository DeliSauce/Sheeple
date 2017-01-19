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
  longitude: -122.431297,
  profile_img_link: "sitting_0"
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
  longitude: -74.0059,
  profile_img_link: "standing_0"
})

profile_description = [
  "I havent held a job for 10 years and live in my mothers basement. So...Im pretty good at sitting around and doing nothing.",
  "I once stood in line for 10 hours just to get Justin Bieber tickets.",
  "Will work for food!!",
  "OMG, people tell me all the time to just 'Sit there are look pretty'. Now I get paid for it!",
  "I'm a health nut so standing for hours is no problem. I only work in non-smoking environments.",
  "I don't get out a lot so I'm happy to just get some interaction with other people.",
  "I'll do anything. Literally, anything.",
  "Is this site for real? Paying people to just 'be present'? Hello dot com bubble 2.0.",
  "Ruff. I identify as a dog so don't be surprised if I come in costume.",
  "Meow. I'm a 'cat'. I will not work with that guy who dresses in dog costumes. He bit me last time we worked together.",
  "I'm free pretty much all the time. Except when I'm not.",
  "I'm a lizard. This website is pure discrimination towards my cold-blooded breathren. Don't even think about contacting me.",
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAH! I need a job quick! I'm getting evicted tomorrow if I can't make my rent."
]

  FactoryGirl.define do
    factory :tasker do
      first_name {Faker::Name.first_name}
      last_name {Faker::Name.last_name}
      username {"#{first_name.downcase}#{rand(100.999)}_#{last_name}"}
      email {"#{first_name}.#{last_name}@example.com".downcase}
      description {profile_description.sample}
      rate {Faker::Number.between(0,30)}
      auto_book {[false, true].sample}
      skill {['sitting', 'standing', 'moving'].sample}
      location {['NY', 'SF'].sample}
      longitude {Faker::Address.longitude}
      latitude {Faker::Address.latitude}
      profile_img_link {"#{skill}_#{rand(0..15)}.jpg"}
    end
  end

# http://res.cloudinary.com/delisauce/image/upload/v1484337646/default-profile-img_c1ir5w.png


  100.times do
    FactoryGirl.create(:tasker)
  end

  # profile_pic = []



  # email {Faker::Internet.email}
# password {Faker::Number.number(1,2)}
