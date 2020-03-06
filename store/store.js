import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import films from '../reducers.films'

const reducer = combineReducers({films})

export default createStore (reducer, applyMiddleware(createSagaMiddleware))