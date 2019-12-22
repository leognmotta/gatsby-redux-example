import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './styles'

export default function Button({ children, type = 'submit' }) {
  return <StyledButton type={type}>{children}</StyledButton>
}

Button.defaultProps = {
  type: 'submit',
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
}
