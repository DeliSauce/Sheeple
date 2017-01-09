## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Header
 - Home

**BookingSearchContainer**
- BookingSearch
  * TaskerList
    * Tasker

**TaskerDetailsContainer**
- TaskerDetails
  * TaskerReviews



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
