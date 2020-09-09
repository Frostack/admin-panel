import React from 'react'
import { connect } from 'react-redux'

import useUser from '../../../../hooks/useUser'
import { editUser, deleteUser, showAlert } from '../../../../actions'
import { ErrorText, UserDetailUserCard, UserDetailWrapper, Avatar } from '../../../common'
import Loading from '../../../common/Loading'
import DetailActions from './DetailActions'
import DetailItem from './DetailItem'
import DetailName from './DetailName'

function UserDetail({ userID, editUser, deleteUser, showAlert }) {
  const { user, isError, isLoading } = useUser(userID)

  if (isError) return <ErrorText className="text-center mt-5">Failed to Load!</ErrorText>
  if (isLoading) return <Loading />

  const { id, email, first_name, last_name, avatar } = user.data
  const { company, url, text } = user.ad

  return (
    <UserDetailWrapper>
      <UserDetailUserCard>
        <DetailActions id={id} editItem={editUser} deleteItem={deleteUser} showAlert={showAlert} />
        <Avatar className="align-self-center" src={avatar} />
        <DetailName name={`${first_name} ${last_name}`} />
        <DetailItem label="Email" value={email} />
        <DetailItem label="ID" value={id} />
        <DetailItem label="Company" value={company} />
        <DetailItem label="Link" value={url} />
        <DetailItem label="Description" value={text} />
      </UserDetailUserCard>
    </UserDetailWrapper>
  )
}

const mapStateToProps = state => {
  return {
    userID: state.user.userDetail.id,
  }
}

const mapDispatchToProps = {
  editUser,
  deleteUser,
  showAlert,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail)
