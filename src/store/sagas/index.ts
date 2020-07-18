import { all } from 'redux-saga/effects'

import home from './Home'

const rootSaga = function*() {
  yield all([
    ...home
  ])
}

export default rootSaga
