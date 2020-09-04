import { RESOURCE_SHOW_DETAIL, RESOURCE_EDIT, RESOURCE_HIDE_EDIT } from '../constants/actionTypes'

const INITIAL_STATE = {
  detail: {
    id: 1,
  },
  editModal: {
    show: false,
    id: null,
  },
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESOURCE_SHOW_DETAIL:
      return { ...state, detail: { id: action.id } }
    case RESOURCE_EDIT:
      return { ...state, editModal: { show: true, id: action.id } }
    case RESOURCE_HIDE_EDIT:
      return { ...state, editModal: { show: false, id: null } }
    default:
      return { ...state }
  }
}
