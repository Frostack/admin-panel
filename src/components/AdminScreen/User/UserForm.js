import React from 'react'
import { Formik, Form } from 'formik'

import { Button } from '../../UI'
import ModalField from './Modal/ModalField'

function UserForm({ initialValues, onSubmit }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="d-flex flex-column d-flex flex-column h-100">
        <ModalField name="first_name" label="First Name" />
        <ModalField name="last_name" label="Last Name" />
        <ModalField name="email" label="Email" />
        <ModalField name="company" label="Company" />
        <ModalField name="url" label="Link" />
        <ModalField name="text" label="Description" />

        <div className="mt-auto d-flex">
          <Button className="p-2 mx-4 mt-4 mb-3 flex-grow-1" type="submit">
            Save User
          </Button>
        </div>
      </Form>
    </Formik>
  )
}

export default UserForm
