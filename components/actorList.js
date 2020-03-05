import React from 'react'
import styled from 'styled-component'
import uuid from 'react-uuid'

const ListWrapper = styled.div`
  position: relative;
  dispkay: flex;
  flex-direction: column;
`

const Actor = styled.a`
  text-decoration: none;
  font-size: 1em;
` 

const ActorList = ({ data }) => {
  return(
    <ListWrapper>
      {
        data.map(item => (
          <Actor key={uuid()}>{item}</Actor>
        ))
      }
    </ListWrapper>
  )
}