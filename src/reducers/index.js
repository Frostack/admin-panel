import { combineReducers } from 'redux'

import userReducer from './userReducer'
import modalReducer from './modalReducer'
import resourceReducer from './resourceReducer'

export default combineReducers({
  user: userReducer,
  modal: modalReducer,
  resource: resourceReducer,
})
