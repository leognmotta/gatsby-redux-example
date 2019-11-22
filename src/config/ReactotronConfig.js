import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'
import reactotronSaga from 'reactotron-redux-saga'

if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect()

  tron.clear()

  console.tron = tron
}
