import { createStore, compose, applyMiddleware } from 'redux'
import isBrowser from '@helpers/isBrowser'

export default (reducers, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development' && isBrowser()
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares)

  return createStore(reducers, enhancer)
}
