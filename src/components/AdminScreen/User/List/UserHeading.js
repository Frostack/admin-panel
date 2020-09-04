import React from 'react'

import {
  AvatarWrapper,
  RowActions,
  ElementRowItem,
  ElementWrapper,
  InfoRowHeading,
} from '../../../UI'

function TableHeading({ fields }) {
  return (
    <ElementWrapper>
      <AvatarWrapper></AvatarWrapper>
      <InfoRowHeading>
        <ElementRowItem>Name</ElementRowItem>
        <ElementRowItem>Email</ElementRowItem>
        <ElementRowItem>ID</ElementRowItem>
        <RowActions></RowActions>
      </InfoRowHeading>
    </ElementWrapper>
  )
}

export default TableHeading
