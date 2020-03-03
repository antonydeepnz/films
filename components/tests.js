import React, { useState } from 'react'


const One = ({title, children}) => {
  const [isOpen, setIsopen] = useState(false)

  return(
    <div onClick={()=>(setIsopen(!isOpen))}>
      {`${title}-${isOpen}`}
      {children}
    </div>
  )
}

const Two = ({desc, year}) => {
  return(
    <div>
      {desc}{year}
    </div>
  )
}

const Test = ({ array }) => {
  const [state, setState] = useState()
  return(
    <div>
      {array.map(item => (
        <>
        <One key={item.title} title={item.title}>
          <Two desc={item.desc} year={item.year}/>
        </One>
        
        </>
      ))}
    </div>
  )
}

export default Test