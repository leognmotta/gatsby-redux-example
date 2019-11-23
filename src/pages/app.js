import React from 'react'
import { Router } from '@reach/router'
import Layout from '@components/Layout'

import PrivateRoute from '@components/PrivateRoute'

import Login from '@screens/Login'
import PrivatePage from '@screens/PrivatePage'

export default function App() {
  return (
    <Layout>
      <Router>
        <Login path="/app/login" />
        <PrivateRoute path="/app/private" component={PrivatePage} />
      </Router>
    </Layout>
  )
}
