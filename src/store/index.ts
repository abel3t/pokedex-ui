import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { createWrapper } from 'next-redux-wrapper'

import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import sagas from './sagas'
const rootReducer = combineReducers(reducers)

export const makeStore = (context: any) => {
  const saga = createSagaMiddleware()
  const middlewares = [ saga ]
  const enhancers = [applyMiddleware(...middlewares)]
  const store = createStore(rootReducer, compose(...enhancers))
  return {
    ...store,
    sagaTask: saga.run(sagas)
  }
}

export const wrapper = createWrapper(makeStore, { debug: true })

