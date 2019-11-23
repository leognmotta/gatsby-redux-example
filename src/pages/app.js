import React from 'react'
import { Router } from '@reach/router'
import Layout from '@components/Layout'

import Login from '@screens/Login'

export default function App() {
  return (
    <Layout>
      <Router>
        <Login path="/app/login" />
      </Router>
    </Layout>
  )
}
