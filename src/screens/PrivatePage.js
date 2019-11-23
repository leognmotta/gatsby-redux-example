import React from 'react'
import { navigate } from 'gatsby'
import { useDispatch } from 'react-redux'

import { signOutRequest } from '@modules/auth/actions'

export default function PrivatePage() {
  const dispatch = useDispatch()

  function signOut() {
    dispatch(signOutRequest())

    navigate('/')
  }

  return (
    <div>
      <h1>You are authenticated</h1>

      <button type="button" onClick={signOut}>
        Sign Out
      </button>
    </div>
  )
}
