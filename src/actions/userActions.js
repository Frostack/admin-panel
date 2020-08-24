import * as types from '../constants/actionTypes';
import api from '../apis/reqres';

export const createUser = user => async dispatch => {
  const response = await api.post('/users', user);
  dispatch({ type: types.USER_CREATE, payload: response.data });
};

export const updateUser = (id, newUser) => async dispatch => {
  const response = await api.put(`/users/${id}`, newUser);
  dispatch({ type: types.USER_UPDATE, payload: response.data });
};

export const deleteUser = id => async dispatch => {
  await api.delete(`/users/${id}`);
  dispatch({ type: types.USER_DELETE });
};

export const showUserDetail = id => {
  return { type: types.USER_SHOW_DETAIL, id };
};

export const editUser = id => {
  return { type: types.USER_EDIT, id };
};

export const hideUserEdit = () => {
  return { type: types.USER_HIDE_EDIT };
};
