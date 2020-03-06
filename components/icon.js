import React from 'react'
import styled from 'styled-component'

const IconWrapper = styled.svg`
  height: ${props => props.height};
  width: ${props => props.width};
`

const SVGIcon = ({ height, width, children }) => {
  return(
    <IconWrapper height={height} width={width} viewBox={`0 0 ${height} ${width}`}>
      { children }
    </IconWrapper>
  )
}

export default SVGIcon

//<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"></svg>