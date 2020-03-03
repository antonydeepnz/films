import React, { useState } from 'react'
import styled from 'styled-components'

const T = styled.div`
  height: ${props => props.isOpen ? '25px' : '0px'};
  transition: height 0.5s;
`

const Two = ({desc, year, bool}) => {
  return(
    <T isOpen={bool}>
      {desc}{year}
    </T>
  )
}

const One = ({title, children, bool}) => {
  const [isOpen, setIsopen] = useState(false)
  const handleClick = (e) => {
    setIsopen(!isOpen)
    //bool()
    //console.log(e.target)
  }
  return(
    <div onClick={handleClick}>
      {`${title}-${isOpen}`}
      <T isOpen={isOpen}/>
    </div>
  )
}

const Test = ({ array }) => {
  const [index, setIndex] = useState(null)

  const a = (e) => {
    console.log(e.target.current)
  } 
  return(
    <div onClick={()=> {console.log()}}>
      {array.map((item, i) => {
        return (
          <div>
            <One key={item.title} title={item.title} bool={a}>
            </One>
          </div>
        )
      })}
    </div>
  )
}
//<Two desc={item.desc} year={item.year} bool={true}/>
export default Test