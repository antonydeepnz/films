import React, { useState, useRef, useCallback } from 'react'
import styled from 'styled-components'

const T = styled.div`
  overflow: hidden; 
  height: ${props => props.isOpen ? '25px' : '0px'};
  transition: height 0.5s;
`

const Two = ({desc, year, bool, getHeight}) => {
  const ref = useRef(null)


  return(
    <T ref={ref} isOpen={bool}>
      {desc}{year}
    </T>
  )
}

const One = ({title, children, func, bool}) => {
  const handleClick = () => {
    func()

  }
  return(
    <div onClick={handleClick}>
      {`${title}-${bool}`}
      <T isOpen={bool} getHeight={}/>
    </div>
  )
}

const Test = ({ array }) => {
  const [active, setActive] = useState(-1)
  
  const getSelected = (key) => {
    const result = (key === active)? -1: key
    setActive(result)
  } 
  return(
    <div>
      {array.map((item, i) => {
        return (
            <One key={item.title} 
                title={item.title} 
                func={() => getSelected(i)}
                bool={i === active} />
        )
      })}
    </div>
  )
}
//<Two desc={item.desc} year={item.year} bool={true}/>
export default Test