import produce from 'immer'

import { INCREASE_COUNTER, DECREASE_COUNTER } from './actions'

const INITIAL_STATE = {
  value: 0,
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return produce(state, draft => {
        draft.value += action.payload.value
      })
    case DECREASE_COUNTER:
      return produce(state, draft => {
        draft.value -= action.payload.value
      })
    default:
      return state
  }
}
