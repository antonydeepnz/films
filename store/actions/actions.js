import { createActions } from 'redux-actions'

export const { getFilms, getError } = createActions({
  GET_FILMS,
  GET_ERROR
})