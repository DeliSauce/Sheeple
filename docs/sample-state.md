```js
{
  currentUser: {
    id: 1,
    username: "dummy-account"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },
  taskers: {
    1: {
      name: "Jason",
      description: "I'm great at standing around",
      price: 12,
      skill: "standing",
      location: "SF"
      reviews: {
        1: {
          reviewer: "Jason's mom",
          comment: "He's a wonderful boy. Please give him a chance."
        }
      }
    }
  },
  tasks: {
    1: {
      skill: "standing",
      tasker_id: 1,
      user_id: 1,
      date: "2017-01-01",
      description: "Standing in line for the grand opening of my bar."
    }
  }
}
```
