import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

import PrivateRoute from '../../containers/PrivateRoute'
import PublicRoute from '../../containers/PublicRoute'
import Login from '../../containers/auth/Login'
import Dashboard from '../../components/Dashboard'

import { LOGIN, DASHBOARD } from '../../routes'

function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={true} component={Login} path={LOGIN} exact />
        <PrivateRoute component={Dashboard} path={DASHBOARD} />
      </Switch>
    </BrowserRouter>
  );
}


export default Routes;