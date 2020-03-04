import { createStore, combineReducers, applyMiddleware } from 'redux'

const reducer = combineReducers({})

export default createStore (reducer, applyMiddleware())