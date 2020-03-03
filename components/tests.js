import React, { useState } from 'react'
import styled from 'styled-components'

const One = ({title, children, bool}) => {
  const [isOpen, setIsopen] = useState(false|bool)

  return(
    <div onClick={()=>(setIsopen(!isOpen))}>
      {`${title}-${isOpen}`}
      {children}
    </div>
  )
}

const T = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  height: ${props => props.isOpen ? '25px' : '0px'};
`

const Two = ({desc, year, bool}) => {
  return(
    <T isOpen={bool}>
      {desc}{year}
    </T>
  )
}

const Test = ({ array }) => {
  const [state, setState] = useState(false)
  return(
    <div>
      {array.map(item => (
        <>
        <One key={item.title} title={item.title}>
          <Two desc={item.desc} year={item.year} bool={true}/>
        </One>
        
        </>
      ))}
    </div>
  )
}

export default Test