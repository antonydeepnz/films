import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
` 

const Title = styled.h2`

`

const Overview = styled.p`
  font-size: 1em;
`

interface IFilmProps {
  title: string,
  description: string
}

const Film: React.FC<IFilmProps> = ({ title, description }) => {
  return(
    <Wrapper>
      <Title>{title}</Title>
      <Overview>{description}</Overview>
    </Wrapper>
  )
}

export default Film