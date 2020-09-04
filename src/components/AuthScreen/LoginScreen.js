import React from 'react'

import useAuth from '../../hooks/useAuth'
import AuthScreen from './AuthScreen'
import AuthLink from './AuthLink'

function LoginScreen() {
  const { error, isLoading, onSubmit } = useAuth('/login')

  return (
    <AuthScreen
      title="Login"
      error={error}
      isLoading={isLoading}
      onSubmit={onSubmit}
      authLinkComponent={
        <AuthLink to="/register" description="Don't have an account yet?" buttonText="Sign Up" />
      }
    />
  )
}

export default LoginScreen
