import React from 'react';

import useAuth from '../../hooks/useAuth';
import AuthScreen from './AuthScreen';
import AuthLink from './AuthLink';

function RegisterScreen() {
  const { error, isLoading, onSubmit } = useAuth('/register');

  return (
    <AuthScreen
      title="Sign Up"
      error={error}
      isLoading={isLoading}
      onSubmit={onSubmit}
      authLinkComponent={
        <AuthLink to="/login" description="Already have an account?" buttonText="Login" />
      }
    />
  );
}

export default RegisterScreen;
