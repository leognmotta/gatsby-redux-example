import produce from 'immer'
import { SIGN_IN_REQUEST, SIGN_OUT_REQUEST } from './actions'

const INITIAL_STATE = {
  token: null,
  signed: false,
}

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return produce(state, draft => {
        draft.token = action.payload.nickname
        draft.signed = true
      })

    case SIGN_OUT_REQUEST:
      return produce(state, draft => {
        draft.token = null
        draft.signed = false
      })
    default:
      return state
  }
}
