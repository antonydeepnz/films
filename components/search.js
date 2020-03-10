import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import SVGIcon from './icon'
import { seacrhIcon, ChevronIcon } from '../utils/icons'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: lightblue;
  margin: 3px;
  border-radius: 15px;
  height: 2em;
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
  const inpRef = useRef(null)

  const handleIconClick = () => {
    setShow(!show)
    if(inpRef.current) {inpRef.current.focus()}
  }
  return(
    <Wrapper show={show} 
      onMouseEnter={handleIconClick} 
      onMouseLeave={handleIconClick} >
      <SVGIcon width={24} height={24} >
        { ChevronIcon }
      </SVGIcon>
      <Input ref={inpRef} show={show}/>
    </Wrapper>
  )
} 

export default Search