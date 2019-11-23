export const SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST'
export const SIGN_OUT_REQUEST = '@auth/SIGN_IN_REQUEST'

export function signInRequest(nickname) {
  return {
    type: SIGN_IN_REQUEST,
    payload: { nickname },
  }
}

export function signOutRequest() {
  return {
    type: SIGN_IN_REQUEST,
    payload: {},
  }
}
