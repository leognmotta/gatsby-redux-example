import React from 'react'
import PropTypes from 'prop-types'

export default function AppWrapper({ element }) {
  return <div>{element}</div>
}

AppWrapper.propTypes = {
  element: PropTypes.node.isRequired,
}
