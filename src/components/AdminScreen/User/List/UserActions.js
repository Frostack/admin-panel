import React from 'react'
import { BsPen, BsTrash2 } from 'react-icons/bs'

import useDeviceSize from '../../../../hooks/useDeviceSize'
import { RowActions, ButtonCircle } from '../../../common'

function UserActions({ onEditClick, onDeleteClick, isHeading }) {
  const deviceSize = useDeviceSize()
  if (!deviceSize.isSmall) return null

  return (
    <RowActions>
      {isHeading ? null : (
        <>
          <ButtonCircle onClick={onEditClick}>
            <BsPen size={18} />
          </ButtonCircle>
          <ButtonCircle onClick={onDeleteClick}>
            <BsTrash2 size={18} />
          </ButtonCircle>
        </>
      )}
    </RowActions>
  )
}

export default UserActions
