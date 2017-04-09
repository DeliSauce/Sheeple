export const LOGIN_FORM_MODAL = 'LOGIN_FORM_MODAL';
export const SIGNUP_FORM_MODAL = 'SIGNUP_FORM_MODAL';
export const BOOKING_FORM_MODAL = 'BOOKING_FORM_MODAL';

export const toggleSessionForm = (formType) => {
  if (formType === 'login') {
    return {type: LOGIN_FORM_MODAL};
  } else {
    return {type: SIGNUP_FORM_MODAL};
  }
};

export const toggleBookingForm = () => ({
  type: BOOKING_FORM_MODAL
});
