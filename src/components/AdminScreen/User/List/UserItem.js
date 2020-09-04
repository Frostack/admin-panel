import React from 'react'
import { connect } from 'react-redux'
import { BsPen, BsTrash2 } from 'react-icons/bs'

import { showUserDetail, editUser, deleteUser, showAlert } from '../../../../actions'
import {
  Avatar,
  ButtonCircle,
  AvatarWrapper,
  InfoRow,
  RowActions,
  ElementRowItem,
  ElementWrapper,
} from '../../../UI'

function UserItem({ avatar, name, email, id, showUserDetail, editUser, deleteUser, showAlert }) {
  const onRowClick = () => showUserDetail(id)
  const onEditClick = () => editUser(id)
  const onDeleteClick = () => {
    deleteUser(id)
    showAlert('Deleted Successfully!')
  }

  return (
    <ElementWrapper>
      <AvatarWrapper>
        <Avatar src={avatar} alt={name} />
      </AvatarWrapper>

      <InfoRow onClick={onRowClick}>
        <ElementRowItem>{name}</ElementRowItem>
        <ElementRowItem>{email}</ElementRowItem>
        <ElementRowItem>{id}</ElementRowItem>

        <RowActions>
          <ButtonCircle onClick={onEditClick}>
            <BsPen size={18} />
          </ButtonCircle>
          <ButtonCircle onClick={onDeleteClick}>
            <BsTrash2 size={18} />
          </ButtonCircle>
        </RowActions>
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
