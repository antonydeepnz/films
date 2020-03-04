import { createActions } from 'redux-actions'

export const { getFilms, getError } = createActions({
  GET_FILMS: (films) => ({...films}),
  GET_ERROR: (error, errorMessage) => {}
})