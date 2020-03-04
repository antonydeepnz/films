import { createActions } from 'redux-actions'

export const { request, getFilms, getError } = createActions({
  REQUEST,
  GET_FILMS,
  GET_ERROR
})