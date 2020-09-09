import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

function ProtectedRoute({ component: Component, ...rest }) {
  // FIXME: needs to verify token but api does not support it!
  const isAuthenticated = Cookies.get('token') ? true : false

  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthenticated) return <Component {...props} />
        else return <Redirect to="/" />
      }}
    />
  )
}

export default ProtectedRoute
