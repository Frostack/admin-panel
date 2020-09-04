import { ALERT_SHOW, ALERT_HIDE } from '../constants/actionTypes'

const INITIAL_STATE = {
  show: false,
  msg: '',
  color: 'var(--green-2)',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALERT_SHOW:
      return { ...state, show: true, msg: action.msg, color: action.color }
    case ALERT_HIDE:
      return { ...state, show: false, msg: '', color: 'var(--green-2)' }
    default:
      return { ...state }
  }
}
