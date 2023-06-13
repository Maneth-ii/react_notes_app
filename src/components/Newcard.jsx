import React from 'react'

const Newcard = ({addNoteFunction}) => {
  return (
    <button className='new-card'  onClick={addNoteFunction}>+</button>
  )
}

export default Newcard