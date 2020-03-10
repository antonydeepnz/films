import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import films from '../reducers.films'
import { getGenres } from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({films})

export default createStore (reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(getGenres)