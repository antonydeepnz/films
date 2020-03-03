import React from 'react'
import { render } from 'react-dom'
// import './style.css'
import styled from 'styled-components'

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  background-color: grey; 
`

const App = () => {
  return(
    <MainContainer>
      
    </MainContainer>
  )
}

render(<App />, document.getElementById('root'));
