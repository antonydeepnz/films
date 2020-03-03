import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
` 

const Title = styled.h2`
  
`

const Overview = styled.p`
  font-size: 1em;
`

interface IFilmProps {
  title: string,

}

const Film: React.FC<IFilmProps> = ({ title }) => {
  return(
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  )
}

export default Film