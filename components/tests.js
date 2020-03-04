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

const One = ({title, children, func, bool}) => {
  //const [isOpen, setOpen] = useState(false)
  const handleClick = () => {
    func()
    //setOpen(bool)
    //console.log(isOpen)
  }
  return(
    <div onClick={handleClick}>
      {`${title}-${bool}`}
      <T isOpen={bool}/>
    </div>
  )
}

const Test = ({ array }) => {
  const [active, setActive] = useState(-1)
  
  const getSelected = (key) => {
    console.log(key, active)
    const result = (key === active)? -1: key
    setActive(()=>result)
    //console.log(active)
  } 
  return(
    <div>
      {array.map((item, i) => {
        return (
            <One key={item.title} 
                title={item.title} 
                func={() => getSelected(i)}
                bool={(i === active)} />
        )
      })}
    </div>
  )
}
//<Two desc={item.desc} year={item.year} bool={true}/>
export default Test