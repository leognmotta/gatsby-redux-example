import { combineReducers } from 'redux'

import counter from './counter/reducer'
import auth from './auth/reducer'
import user from './user/reducer'

export default combineReducers({
  counter,
  auth,
  user,
})
