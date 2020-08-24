import React from 'react';
import { connect } from 'react-redux';

import { hideUserEdit, updateUser, showAlert } from '../../../../actions';
import EditModal from './EditModal';

function UserEditModal({ show, id, updateUser, hideUserEdit, showAlert }) {
  if (!show) return null;

  return (
    <EditModal
      onHide={hideUserEdit}
      itemID={id}
      updateItem={updateUser}
      showAlert={showAlert}
      reqPath="users"
    />
  );
}

const mapStateToProps = state => {
  return {
    show: state.user.editModal.show,
    id: state.user.editModal.id,
  };
};

const mapDispatchToProps = {
  updateUser,
  hideUserEdit,
  showAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEditModal);
