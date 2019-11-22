export const INCREASE_COUNTER = '@counter/INCREASE_COUNTER'
export const DECREASE_COUNTER = '@counter/DECREASE_COUNTER'

export function increaseCounter(value) {
  return {
    type: INCREASE_COUNTER,
    payload: {
      value,
    },
  }
}

export function decreaseCounter(value) {
  return {
    type: DECREASE_COUNTER,
    payload: {
      value,
    },
  }
}
