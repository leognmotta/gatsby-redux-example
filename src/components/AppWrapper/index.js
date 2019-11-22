import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import GlobalStyles from '@styles/GlobalStyles'

import '@config/ReactotronConfig'

import { store, persistor } from '@store'

export default function AppWrapper({ element }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {element}
        <GlobalStyles />
      </PersistGate>
    </Provider>
  )
}

AppWrapper.propTypes = {
  element: PropTypes.node.isRequired,
}
