import React from 'react'
import styled from 'styled-component'

const Overview = styled.p`
  font-size: 1em;
` 

const FilmOverview = ({ overview }) => {
  return(
    <Overview>
      {overview}
    </Overview>
  )
}