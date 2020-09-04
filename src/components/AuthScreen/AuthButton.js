import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

import { CustomButton } from '../UI'

function AuthButton({ isLoading, title }) {
  if (isLoading) {
    return (
      <CustomButton className="px-5 py-2 my-5" type="submit">
        <span>Please Wait</span>
        <Spinner as="span" animation="grow" size="sm" className="ml-2" />
      </CustomButton>
    )
  }
  return <CustomButton className="px-5 py-2 my-5">{title}</CustomButton>
}

export default AuthButton
