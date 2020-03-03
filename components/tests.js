import React, { useState } from 'react'

const data = [
  {title:'sdfdsfsdf', year: 1999, desc: 'esfsdffwdasdfsgdsffefds sdf f dsf e gs'},
  {title:'54fdhjgdf', year: 1989, desc: 'cxzcdsfds sffefds sdf f dsf e gs'},
  {title:'qwret', year: 2000, desc: '45545356 sg899 sdf f dsf e gs'},
  {title:'zxvcvbv56', year: 2012, desc: 'es 3243 fssdvgdgdfg dsffefds sdf f dsf e gs'}
]

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

const Test = () => {
  const [state, setState] = useState()
  return(
    <div>
      {data.map(item => (
        <>
        <One title={item.title}/>
        <Two desc={item.desc} year={item.year}/>
        </>
      ))}
    </div>
  )
}

export default Test