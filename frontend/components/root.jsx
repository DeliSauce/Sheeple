import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import Homepage from './homepage/homepage';
import BookingContainer from './booking/booking_container';
import DashboardContainer from './dashboard/dashboard_container';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';



const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    console.log(currentUser);
    if (currentUser === null) {
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>

          <IndexRoute component={Homepage} />

          <Route component={Homepage}>
            <Route path="/login" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
            <Route path="/signup" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
          </Route>

          <Route path='/booking' component={BookingContainer} onEnter={_ensureLoggedIn}/>
          <Route path='/dashboard' component={DashboardContainer} onEnter={_ensureLoggedIn}/>
        </Route>

      </Router>
    </Provider>
  );
};

export default Root;
