import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import Axios from '../../axios_inst'
import { API_KEY } from '../../utils/'

function* getFilm(){
  try {


  }
  catch(err){
    console.log(err)
  }
}

function* getGenres(){
  try {
    const genres = yield call(Axios.get(`${API_KEY}&language=en-EN`), ) 
    console.log(genres.data)
  } catch(err){
    console.log(err)
  }
}