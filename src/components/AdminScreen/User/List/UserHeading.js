import React from 'react'

import { ElementRowItem, ElementWrapper, InfoRowHeading } from '../../../UI'
import UserAvatar from './UserAvatar'
import UserActions from './UserActions'

function TableHeading({ fields }) {
  return (
    <ElementWrapper>
      <UserAvatar isHeading />
      <InfoRowHeading>
        <ElementRowItem>Name</ElementRowItem>
        <ElementRowItem>Email</ElementRowItem>
        <ElementRowItem>ID</ElementRowItem>
        <UserActions isHeading />
      </InfoRowHeading>
    </ElementWrapper>
  )
}

export default TableHeading
