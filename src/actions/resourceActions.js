import * as types from '../constants/actionTypes';
import api from '../apis/reqres';

export const updateResource = (id, newResource) => async dispatch => {
  const response = await api.put(`/unknown/${id}`, newResource);
  dispatch({ type: types.RESOURCE_UPDATE, payload: response.data });
};

export const deleteResource = id => async dispatch => {
  await api.delete(`/unknown/${id}`);
  dispatch({ type: types.RESOURCE_DELETE });
};

export const showResourceDetail = id => {
  return { type: types.RESOURCE_SHOW_DETAIL, id };
};

export const editResource = id => {
  return { type: types.RESOURCE_EDIT, id };
};

export const hideResourceEdit = () => {
  return { type: types.RESOURCE_HIDE_EDIT };
};
