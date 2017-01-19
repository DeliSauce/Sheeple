import React from 'react';
import FiltersContainer from './filters_container';
import SearchResultsContainer from './search_results_container';

const Booking = () => (
  <div className="booking-container">
    <div className="booking-header">
      <span className="booking-header-title">Search For a Warm Body</span>
    </div>
    <div className="filter-and-search-container">
      <FiltersContainer />
      <SearchResultsContainer />
    </div>
  </div>
);

export default Booking;
