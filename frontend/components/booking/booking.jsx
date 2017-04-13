import React from 'react';
import Modal from 'react-modal';
import FiltersContainer from './filters_container';
import SearchResultsContainer from './search_results_container';
import BookingHeader from './booking_header';
import FormContainer from './booking_form_container';

const Booking = () => (
  <div className="booking-container">
    <BookingHeader />
    <div className="filter-and-search-container">
      <FiltersContainer />
      <SearchResultsContainer />
    </div>
    <FormContainer />

  </div>
);

export default Booking;
