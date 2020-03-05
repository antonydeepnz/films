import React from 'react'
import styled from 'styled-components'

import { GET_IMAGE } from '../utils/api_config'

const Image = styled.img`
  position: absolute;
  top: 15px;
  left: -15px;
`
const Poster = ({ src }) => {
  return(
    <Image src={GET_IMAGE(src, 200)}/>
  )
} 

export default Poster