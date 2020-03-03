import React, { useState } from 'react'


const One = ({title}) => {
  const [open, setOpen] = useState(false)

  return(
    <div onClick={()=>(setOpen(!open))}>
      {`${title}-${open}`}
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
        <One key={item.title} title={item.title} />
        <Two desc={item.desc} year={item.year}/>
        </>
      ))}
    </div>
  )
}

export default Test