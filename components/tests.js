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

const One = ({title, children, isOpen=false}) => {
  // const [isOpen, setIsopen] = useState(false)
  // const handleClick = (e) => {
  //   setIsopen(!isOpen)
  //   //bool(e)
  //   console.log(e.currentTarget)
  // }
  return(
    <div onClick={}>
      {`${title}-${isOpen}`}
      <T isOpen={isOpen}/>
    </div>
  )
}

const Test = ({ array }) => {
  const [open, setOpen] = useState(false)

  const getSelected = () => {
    
  } 
  return(
    <div onClick={()=> {console.log()}}>
      {array.map((item, i) => {
        return (
          <div>
            <One key={item.title} title={item.title} isOpen={open}>
            </One>
          </div>
        )
      })}
    </div>
  )
}
//<Two desc={item.desc} year={item.year} bool={true}/>
export default Test