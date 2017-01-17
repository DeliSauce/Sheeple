import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import HomepageContainer from './homepage/homepage_container';
import Booking from './booking/booking';
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
    if (currentUser === null) {
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>

          <IndexRoute component={HomepageContainer} />

          <Route component={HomepageContainer}>
          </Route>

          <Route path='/booking' component={Booking} onEnter={_ensureLoggedIn}/>
          <Route path='/dashboard' component={DashboardContainer} onEnter={_ensureLoggedIn}/>
        </Route>

      </Router>
    </Provider>
  );
};

export default Root;
// <Route component={Homepage}>
//   <Route path="/login" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
//   <Route path="/signup" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
// </Route>
