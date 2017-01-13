import React from 'react';
import FiltersContainer from './filters_container';
import SearchResultsContainer from './search_results_container';

const Booking = () => (
  <div className="booking-container">
    <FiltersContainer />
    <SearchResultsContainer />
  </div>
);

export default Booking;
