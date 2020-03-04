import { handleActions } from 'redux-actions'

import { request, getFilms, getError } from '../actions/actions'

const initialState = {
  films: [],
  loading: false,
  error: false,
  errorMessage: ''
}

export default handleActions(
  {
    [request]: (state) => ({...state, loading: true}),
    [getFilms]: (state,{payload}) => ({...state, films: [...state.films, ...payload.films]}),
    [getError]: (state, {payload}) => ({...state, error: true, errorMessage: payload.errorMessage})
  },
  initialState
)

