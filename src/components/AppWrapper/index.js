import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import GlobalStyles from '@styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from '@styles/themes'

import '@config/ReactotronConfig'

import { store, persistor } from '@store'

export default function AppWrapper({ element }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme[process.env.THEME || 'mainTheme']}>
          {element}
          <GlobalStyles />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

AppWrapper.propTypes = {
  element: PropTypes.node.isRequired,
}
