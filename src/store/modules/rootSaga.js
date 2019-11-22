import { all } from 'redux-saga/effects'

import counter from './counter/sagas'

export default function* rootSaga() {
  return yield all([counter])
}
