import React from 'react';
import FiltersContainer from './filters_container';
import SearchResultsContainer from './search_results_container';
import BookingHeader from './booking_header';

const Booking = () => (
  <div className="booking-container">
    <BookingHeader />
    <div className="filter-and-search-container">
      <FiltersContainer />
      <SearchResultsContainer />
    </div>
  </div>
);

export default Booking;
