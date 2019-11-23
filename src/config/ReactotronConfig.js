/* eslint-disable no-restricted-globals */
import { createClient } from 'reactotron-core-client'
import { reactotronRedux } from 'reactotron-redux'
import reactotronSaga from 'reactotron-redux-saga'

import isBrowser from '@helpers/isBrowser'

function getNavigatorProperty(name) {
  if (!name) return undefined
  if (isBrowser()) return undefined
  if (!window.navigator && typeof window.navigator !== 'object')
    return undefined
  return window.navigator[name]
}

if (process.env.NODE_ENV === 'development' && isBrowser()) {
  const REACTOTRON_ASYNC_CLIENT_ID = '@REACTOTRON/clientId'

  const client = {
    createSocket: path => new WebSocket(path), // eslint-disable-line
    host: 'localhost',
    port: 9090,
    name: 'React JS App',
    client: {
      reactotronLibraryName: 'reactotron-react-js',
      reactotronLibraryVersion: 'REACTOTRON_REACT_JS_VERSION',
      platform: 'browser',
      platformVersion: getNavigatorProperty('platform'),
      userAgent: getNavigatorProperty('userAgent'),
      screenWidth: (screen && screen.width) || undefined,
      screenHeight: (screen && screen.height) || undefined,
      screenScale: (window && window.devicePixelRatio) || 1,
      windowWidth: (window && window.innerWidth) || undefined,
      windowHeight: (window && window.innerHeight) || undefined,
    },
    getClientId: () => {
      return Promise.resolve(localStorage.getItem(REACTOTRON_ASYNC_CLIENT_ID))
    },
    setClientId: clientId => {
      localStorage.setItem(REACTOTRON_ASYNC_CLIENT_ID, clientId)
      return Promise.resolve()
    },
  }

  const Reactotron = createClient(client)

  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect()

  tron.clear()

  console.tron = tron
}
