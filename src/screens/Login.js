import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { useDispatch } from 'react-redux'
import { signInRequest } from '@modules/auth/actions'

export default function Login() {
  const [nickname, setNickname] = useState('')
  const dispatch = useDispatch()

  function onSubmit(event) {
    event.preventDefault()

    dispatch(signInRequest(nickname))

    navigate('/app/private')
  }

  return (
    <div>
      <h1>Login page</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="nickname">
          nickname:{' '}
          <input
            id="nickname"
            type="text"
            value={nickname}
            onChange={e => setNickname(e.target.value)}
          />
        </label>

        <button type="submit">Send</button>
      </form>
    </div>
  )
}
