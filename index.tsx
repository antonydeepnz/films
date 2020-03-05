import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
// import './style.css'
import styled from 'styled-components'
import axios from 'axios'

import Demo from './components/test'

import Accordion from './components/accordionItem'
import Test from './components/tests'

import { getFilms, getError } from './store/actions/actions'
import { GET_IMAGE } from './utils/api_config'
// import axiosOMBD from './utils/axios_inst'

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  background-color: grey; 
`

const data1 = [
  {title:'sdfdsfsdf', year: 1999, desc: 'esfsdffwdasdfsgdsffefds sdf f dsf e gs'},
  {title:'54fdhjgdf', year: 1989, desc: 'cxzcdsfds sffefds sdf f dsf e gs'},
  {title:'qwret', year: 2000, desc: '45545356 sg899 sdf f dsf e gs'},
  {title:'zxvcvbv56', year: 2012, desc: 'es 3243 fssdvgdgdfg dsffefds sdf f dsf e gs'}
]

const App = () => {

  useEffect(() => {
    const getFilm = async() => {
      const res = await axios.get('https://api.themoviedb.org/3/movie/76341?api_key=47e345218071181a1ca1d4eb072cc0cf&language=EN')
      console.log(res.data)
    }
    getFilm()
  })

  return(
    <MainContainer>
      <Test array={data1} />
      <img src={GET_IMAGE('/tbhdm8UJAb4ViCTsulYFL3lxMCd.jpg', 300)}/>
    </MainContainer>
  )
}

render(<App />, document.getElementById('root'));
