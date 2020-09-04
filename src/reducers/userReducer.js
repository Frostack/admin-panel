import { USER_SHOW_DETAIL, USER_EDIT, USER_HIDE_EDIT } from '../constants/actionTypes'

const INITIAL_STATE = {
  userDetail: {
    id: 1,
  },
  editModal: {
    show: false,
    id: null,
  },
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_SHOW_DETAIL:
      return { ...state, userDetail: { id: action.id } }
    case USER_EDIT:
      return { ...state, editModal: { show: true, id: action.id } }
    case USER_HIDE_EDIT:
      return { ...state, editModal: { show: false, id: null } }
    default:
      return { ...state }
  }
}
