![sheeple-logo]
[sheeple-logo]: ./app/assets/images/sheeple_logo.png
[live link!][sheeple]
[sheeple]: https://www.sheeple.co


# Sheeple
Sheeple is a web application that allows new businesses to create buzz by hiring people to create a crowd.


## Features

#### Logging In
Sheeple allows you to log in as a new user or test out the site as a guest.<br>

Your data will be saved for future visits.

Your password is secured using backend encryption.



#### Search
Sheeple lets you quickly sort through "bodies" with a simple search filter. A handy "Clear Filters" button quickly and easily resets the filters: <br>

![search-filters-cleared-screenshot] ![search-filters-selected-screenshot]
[search-filters-selected-screenshot]: ./docs/screenshots/search-filters-selected-screenshot.png
[search-filters-cleared-screenshot]: ./docs/screenshots/search-filters-cleared-screenshot.png

<br>
Search listings include relevant information about the Sheeple to help you make your decision.
- Icons help to distinguish between sitters, movers, and standers.
<br>
- "Instant Booking" allows for booking without the need for confirmation first.
- Booking buttons change dynamically depending each Sheeple's preferences.

![search-listing-sitting-screenshot]
[search-listing-sitting-screenshot]: ./docs/screenshots/search-listing-sitting-screenshot.png
![search-listing-standing-screenshot]
[search-listing-standing-screenshot]: ./docs/screenshots/search-listing-standing-screenshot.png
![search-listing-moving-screenshot]
[search-listing-moving-screenshot]: ./docs/screenshots/search-listing-moving-screenshot.png

#### Search

All tasks are stored on the Dashboard page. They are conveniently divided into three columns: Completed, Booked, and Pending. Bookings can be canceled if they have not yet been confirmed.

![dashboard-empty-screenshot]
[dashboard-empty-screenshot]: ./docs/screenshots/dashboard-empty-screenshot.png
![dashboard-full-screenshot]
[dashboard-full-screenshot]: ./docs/screenshots/dashboard-full-screenshot.png


## Implementation
Implemented Airbnb's [slider][slider] and [date picker][dates] for search filtering.


[slider]: https://github.com/airbnb/rheostat
[dates]: https://github.com/airbnb/react-dates
