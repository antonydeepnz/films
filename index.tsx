import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
// import './style.css'
import styled from 'styled-components'
import axios from 'axios'

import Demo from './components/test'

import Accordion from './components/accordionItem'

// import axiosOMBD from './utils/axios_inst'

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  background-color: grey; 
`

const App = () => {
  const [data, setData] = useState({})
  

  return(
    <MainContainer>
      <Accordion/>
      
    </MainContainer>
  )
}
// <Demo />
render(<App />, document.getElementById('root'));


  // useEffect(() => {
  //  const getData = async() => {
  //   const result = await axios.get('https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=2e8a9edb&type=movie&page=26')
  //   //await setData(result.data)
  //   await console.log(result.data)
  //  }

  //  getData()
  // }, [])
