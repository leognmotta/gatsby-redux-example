import produce from 'immer'
import { SIGN_IN_REQUEST, SIGN_OUT_REQUEST } from '@modules/auth/actions'

const INITIAL_STATE = {
  nickname: null,
}

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return produce(state, draft => {
        draft.nickname = action.payload.nickname
      })

    case SIGN_OUT_REQUEST:
      return produce(state, draft => {
        draft.nickname = null
      })
    default:
      return state
  }
}
