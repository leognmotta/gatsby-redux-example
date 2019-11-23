import React from 'react'
import { useSelector } from 'react-redux'

export default function Status() {
  const user = useSelector(state => state.user.nickname)

  return <h2>{user ? `Authenticated as ${user}` : 'Not authenticated'}</h2>
}
