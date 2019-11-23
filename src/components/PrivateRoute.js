import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import { store } from '@store/index'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { signed } = store.getState().auth

  if (!signed && location.pathname !== `/app/login`) {
    navigate(`/app/login`)
  }

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
}

PrivateRoute.defaultProps = {
  location: undefined,
}

export default PrivateRoute
