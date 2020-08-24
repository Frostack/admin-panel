import React from 'react';
import { connect } from 'react-redux';

import { showResourceDetail, deleteResource, showAlert, editResource } from '../../../../actions';
import { ResourceItemCustomRowItem, CustomRowInfo, ElementWrapper } from '../../../UI';

function ResourceItem({
  name,
  year,
  color,
  pantone,
  id,
  showResourceDetail,
  deleteResource,
  showAlert,
  editResource,
}) {
  const onRowClick = () => showResourceDetail(id);

  return (
    <ElementWrapper>
      <CustomRowInfo color={color} onClick={onRowClick}>
        <ResourceItemCustomRowItem>{name}</ResourceItemCustomRowItem>
        <ResourceItemCustomRowItem>{year}</ResourceItemCustomRowItem>
        <ResourceItemCustomRowItem>{id}</ResourceItemCustomRowItem>
        <ResourceItemCustomRowItem>{color}</ResourceItemCustomRowItem>
        <ResourceItemCustomRowItem>{pantone}</ResourceItemCustomRowItem>
      </CustomRowInfo>
    </ElementWrapper>
  );
}

const mapDispatchToProps = {
  showResourceDetail,
  deleteResource,
  showAlert,
  editResource,
};

export default connect(null, mapDispatchToProps)(ResourceItem);
