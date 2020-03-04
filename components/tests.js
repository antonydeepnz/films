import React, { useState, useRef } from 'react'
import styled from 'styled-components'

const T = styled.div`
  position: relative;
  overflow: hidden;
  height: ${props => props.isOpen ? '50px' : '0px'};
  transition: height 0.5s;
`

const Two = ({desc, year, bool, getHeight}) => {
  const ref = useRef(null)

  return(
    <T ref={ref} isOpen={bool}>
      <p>{desc}</p><p>{year}</p>
      {console.log(ref.current.scrollHeight)}
    </T>
  )
}

const One = ({title, desc, year, func, bool}) => {
  const handleClick = () => {
    func()
  }
  return(
    <div onClick={handleClick}>
      {`${title}-${bool}`}
      <T isOpen={bool} desc={desc} year={year}/>
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
                bool={i === active} 
                desc={item.desc}
                year={item.year}/>
        )
      })}
    </div>
  )
}
//<Two desc={item.desc} year={item.year} bool={true}/>
export default Test