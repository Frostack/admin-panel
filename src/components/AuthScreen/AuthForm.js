import React from 'react'
import { Formik } from 'formik'

import { CustomForm, CustomInput } from '../common'
import AuthButton from './AuthButton'

function AuthForm({ onSubmit, isLoading, title }) {
  const initialFormValues = { email: '', password: '' }

  return (
    <Formik initialValues={initialFormValues} onSubmit={onSubmit}>
      <CustomForm>
        <CustomInput name="email" className="mt-5" placeholder="Email" type="email" autoFocus />
        <CustomInput name="password" className="mt-3" placeholder="Password" type="password" />
        <AuthButton isLoading={isLoading} title={title} />
      </CustomForm>
    </Formik>
  )
}

export default AuthForm
