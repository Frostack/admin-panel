import React from 'react';
import { connect } from 'react-redux';

import { createUser, showAlert } from '../../../actions';
import UserForm from './UserForm';

function UserCreate({ createUser, showAlert }) {
  const onSubmit = values => {
    createUser(values);
    showAlert('User Created Successfully');
  };

  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    url: '',
    text: '',
  };

  return <UserForm initialValues={initialValues} onSubmit={onSubmit} />;
}

const mapDispatchToProps = {
  createUser,
  showAlert,
};

export default connect(null, mapDispatchToProps)(UserCreate);
