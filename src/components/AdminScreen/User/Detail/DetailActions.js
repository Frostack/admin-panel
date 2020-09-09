import React from 'react'
import { BsPen, BsTrash2 } from 'react-icons/bs'
import { Button } from '../../../common'

function DetailActions({ id, editItem, deleteItem, showAlert }) {
  const onEditClick = () => editItem(id)
  const onDeleteClick = () => {
    deleteItem(id)
    showAlert('Deleted Successfully!')
  }

  return (
    <div className="d-flex justify-content-between p-3">
      <Button secondary onClick={onEditClick}>
        <BsPen size={18} />
      </Button>
      <Button secondary onClick={onDeleteClick}>
        <BsTrash2 size={18} />
      </Button>
    </div>
  )
}

export default DetailActions
