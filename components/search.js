import React, { useState } from 'react'
import styled from 'styled-components'

import SVGIcon from './icon'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin: 3px;
  border-radius: 15px;
`

const Input = styled.input`
  visibility: ${props => props.show? 'visible' : 'hidden'};
  width: ${props => props.show? '150px' : '0px'};
  transition: width 0.5s, visibility 0.5s;
`

const seacrhIcon = <><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></>

const Search = ({}) => {
  const [ show, setShow ] = useState(false)

  const handleIconClick = () => {
    setShow(!show)
  }
  return(
    <Wrapper onMouseEnter={handleIconClick} onMouseLeave={handleIconClick}>
      <SVGIcon width={24} height={24}>
        { seacrhIcon }
      </SVGIcon>
      <Input show={show}/>
    </Wrapper>
  )
} 

export default Search