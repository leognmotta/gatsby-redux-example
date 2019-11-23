import { all } from 'redux-saga/effects'

import counter from './counter/sagas'
import auth from './auth/sagas'
import user from './user/sagas'

export default function* rootSaga() {
  return yield all([counter, auth, user])
}
