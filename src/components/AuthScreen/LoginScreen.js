import React from 'react'

import useVerified from './../../hooks/useVerified'
import useAuth from '../../hooks/useAuth'
import AuthScreen from './AuthScreen'
import AuthLink from './AuthLink'

function LoginScreen() {
  useVerified()
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
