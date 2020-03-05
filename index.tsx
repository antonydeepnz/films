import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
// import './style.css'
import styled from 'styled-components'
import axios from 'axios'

import Demo from './components/test'

import Accordion from './components/accordionItem'
import Test from './components/tests'

import { getFilms, getError } from './store/actions/actions'
import { GET_IMAGE, BASIC_URL, API_KEY } from './utils/api_config'

import Poster from './components/poster'

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  background-color: grey;
  diplay: flex;
`

const Wrap = styled.div`
  position: relative;
  display: block;
  background-color: white;
  width: 500px;
  height: 500px;
`

const data1 = [
  {title:'sdfdsfsdf', year: 1999, desc: 'esfsdffwdasdfsgdsffefds sdf f dsf e gs'},
  {title:'54fdhjgdf', year: 1989, desc: 'cxzcdsfds sffefds sdf f dsf e gs'},
  {title:'qwret', year: 2000, desc: '45545356 sg899 sdf f dsf e gs'},
  {title:'zxvcvbv56', year: 2012, desc: 'es 3243 fssdvgdgdfg dsffefds sdf f dsf e gs'}
]

const App = () => {
//https://api.themoviedb.org/3/search/movie?api_key=47e345218071181a1ca1d4eb072cc0cf&language=EN&query=Jack+Reacher
  useEffect(() => {
    const getFilm = async() => {
      const query = (query = '') => (`${BASIC_URL}search/movie?${API_KEY}&language=ru-RU&query=${query}`)
      ///genre/movie/list
      const res = await axios.get(query('Matrix'))
      const genres = await axios.get(`${BASIC_URL}genre/movie/list?${API_KEY}&language=ru-RU`)
      console.log(res.data)
      console.log(genres.data)
    }
    getFilm()
  })

  return(
    <MainContainer>
    <Test array={data1} />
      <Wrap>
        <Poster src={'/h1XjBJoWdOh8aegBoVYKgABQZSL.jpg'} />
      </Wrap>
    </MainContainer>
  )
}

// <Test array={data1} />
//       <img src={GET_IMAGE('/h1XjBJoWdOh8aegBoVYKgABQZSL.jpg', 200)}/>

render(<App />, document.getElementById('root'));
