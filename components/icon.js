import React from 'react'
import styled from 'styled-components'

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