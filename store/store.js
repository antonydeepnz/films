import { createStore, combineReducers, applyMiddleware } from 'redux'

import films from '../reducers.films'

const reducer = combineReducers({films})

export default createStore (reducer, applyMiddleware())