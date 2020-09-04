import React from 'react'
import { connect } from 'react-redux'

import { showResourceDetail, deleteResource, showAlert, editResource } from '../../../../actions'
import { CustomRowItem, CustomRowInfo } from '../../../UI'

function ResourceItem({ name, year, color, pantone, id, showResourceDetail }) {
  const onRowClick = () => showResourceDetail(id)

  return (
    <CustomRowInfo color={color} onClick={onRowClick}>
      <CustomRowItem>{name}</CustomRowItem>
      <CustomRowItem>{year}</CustomRowItem>
      <CustomRowItem>{id}</CustomRowItem>
      <CustomRowItem>{color}</CustomRowItem>
      <CustomRowItem>{pantone}</CustomRowItem>
    </CustomRowInfo>
  )
}

const mapDispatchToProps = {
  showResourceDetail,
  deleteResource,
  showAlert,
  editResource,
}

export default connect(null, mapDispatchToProps)(ResourceItem)
