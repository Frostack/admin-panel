import React from 'react'
import { connect } from 'react-redux'

import { showUserDetail, editUser, deleteUser, showAlert } from '../../../../actions'
import { InfoRow, ElementRowItem, ElementWrapper } from '../../../common'
import UserAvatar from './UserAvatar'
import UserActions from './UserActions'

function UserItem({ avatar, name, email, id, showUserDetail, editUser, deleteUser, showAlert }) {
  const onRowClick = () => showUserDetail(id)
  const onEditClick = () => editUser(id)
  const onDeleteClick = () => {
    deleteUser(id)
    showAlert('Deleted Successfully!')
  }

  return (
    <ElementWrapper>
      <UserAvatar avatar={avatar} name={name} />

      <InfoRow onClick={onRowClick}>
        <ElementRowItem>{name}</ElementRowItem>
        <ElementRowItem>{email}</ElementRowItem>
        <ElementRowItem>{id}</ElementRowItem>

        <UserActions onDeleteClick={onDeleteClick} onEditClick={onEditClick} />
      </InfoRow>
    </ElementWrapper>
  )
}

const mapDispatchToProps = {
  showUserDetail,
  editUser,
  deleteUser,
  showAlert,
}

export default connect(null, mapDispatchToProps)(UserItem)
