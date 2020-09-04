import * as types from '../constants/actionTypes'

export const showAlert = (msg, color = 'var(--green-2)') => {
  return { type: types.ALERT_SHOW, msg, color }
}

export const hideAlert = () => {
  return { type: types.ALERT_HIDE }
}
