import React from 'react'
import Modal from 'react-bootstrap/Modal'

import { UserCard, EditModalWrapper } from '../../../UI'
import useUser from '../../../../hooks/useUser'
import Loading from '../../../UI/Loading'
import RequestError from '../../../UI/RequestError'
import UserForm from '../UserForm'

function EditModal({ itemID, updateItem, showAlert, onHide }) {
  const { user, isError, isLoading } = useUser(itemID)

  if (isError) return <RequestError />
  if (isLoading) return <Loading />

  const { email, first_name, last_name } = user.data
  const { company, url, text } = user.ad
  const initialValues = { email, company, url, text, first_name, last_name }

  const onSubmit = values => {
    updateItem(itemID, values)
    onHide()
    showAlert('Edited Successfully')
  }

  return (
    <Modal dialogAs="div" dialogClassName="custom-modal" show={true} onHide={onHide}>
      <EditModalWrapper className="m-auto">
        <UserCard>
          <UserForm initialValues={initialValues} onSubmit={onSubmit} />
        </UserCard>
      </EditModalWrapper>
    </Modal>
  )
}

export default EditModal
