## Component Hierarchy

- Header

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home

**BookingSearchContainer**
- BookingSearch
  * TaskerList
    * TaskerDetails

**TaskerDetailsContainer**
- TaskerDetails
  * TaskerReviews

**DashboardContainer**
- TaskDetails


|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/booking" | "BookingSearchContainer" |
| "/booking/search-results" | "TaskerListContainer" |
| "/booking/search-results/tasker/:taskerId" | "TaskerDetailsContainer" |
| "/booking/search-results/booking-form" | "BookingFormContainer" |
| "/users/:id" | "DashboardContainer" |
| "/users/:id/tasks" | "DashboardContainer" |
