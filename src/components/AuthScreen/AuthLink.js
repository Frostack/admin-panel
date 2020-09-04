import React from 'react'
import { Link } from 'react-router-dom'

import { SmallText, TextButton } from '../UI'

function AuthLink({ description, to, buttonText }) {
  return (
    <SmallText>
      {description}{' '}
      <Link to={to}>
        <TextButton>{buttonText}</TextButton>
      </Link>{' '}
    </SmallText>
  )
}

export default AuthLink
