import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import films from '../reducers.films'
import { getGenres } from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({films})

export default createStore (reducer, applyMiddleware(logger,sagaMiddleware))

sagaMiddleware.run(getGenres)