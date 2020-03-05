import React from 'react'
import styled from 'styled-component'

import { GET_IMAGE } from '../utils/api_config'

const Image = styled.img`
  position: relative;
  width: auto;
  height: auto;
`
const Poster = ({ src }) => {
  return(
    <Image src={GET_IMAGE(src)}/>
  )
} 

export default Poster