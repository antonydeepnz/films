import React, { useState } from 'react'
import styled from 'styled-components'

import SVGIcon from './icon'
import { seacrhIcon } from '../utils/icons'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: lightblue;
  margin: 3px;
  border-radius: 15px;
  height: 35px;
  width: ${props => props.show? '250px' : '24px'};
  transition: width 0.5s;
`

const Input = styled.input`
  visibility: ${props => props.show? 'visible' : 'hidden'};
  width: ${props => props.show? '150px' : '0px'};
  transition: width 0.5s, visibility 0.5s;
`

const Search = ({}) => {
  const [ show, setShow ] = useState(false)

  const handleIconClick = () => {
    setShow(!show)
  }
  return(
    <Wrapper show={show} 
      onMouseEnter={handleIconClick} 
      onMouseLeave={handleIconClick} >
      <SVGIcon width={24} height={24}>
        { seacrhIcon }
      </SVGIcon>
      <Input show={show}/>
    </Wrapper>
  )
} 

export default Search