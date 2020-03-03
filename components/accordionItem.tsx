import React, { useState } from 'react'
import styled from 'styled-components'
import Film from './film'
// import data from '../utils/films'

const data = [
  {title:'sdfdsfsdf', year: 1999, desc: 'esfsdffwdasdfsgdsffefds sdf f dsf e gs'},
  {title:'54fdhjgdf', year: 1989, desc: 'cxzcdsfds sffefds sdf f dsf e gs'},
  {title:'qwret', year: 2000, desc: '45545356 sg899 sdf f dsf e gs'},
  {title:'zxvcvbv56', year: 2012, desc: 'es 3243 fssdvgdgdfg dsffefds sdf f dsf e gs'},
]
const Wrap = styled.div`
  position: relative;
  dispay: block;
`

const ItemWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${props => props.opened ? 'red' : 'grey' };
`

const ACC = styled.div`
  position: relative;
  overflow: hidden;
  height:  ${props => props.opened ? '500px' : '0px' };
  transition: height 0.3s;
`

const Accordion = () => {
  const [open, setOpen] = useState(false)
  console.log(open)
  return(
    <Wrap>
      <ItemWrapper onClick={() => (setOpen(!open))}>Open</ItemWrapper>
      <ACC opened={open}>
        {
          data.map(item => {
            return <Film title={item.title} description={item.desc}/>
          })
        }
      </ACC>
    </Wrap>
  )
}

export default Accordion