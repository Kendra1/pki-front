import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

// import PrivateRoute from '../../containers/PrivateRoute'
// import PublicRoute from '../../containers/PublicRoute'
import Login from '../../containers/auth/Login'
// import Dashboard from '../../containers/Dashboard'

import { LOGIN, DASHBOARD } from '../../routes'

function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route restricted={true} component={Login} path={LOGIN} exact />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
    return {
    };
  };

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(Routes);