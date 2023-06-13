import React from 'react'
import { Card } from './Card'
import Newcard from './Newcard'

export const Sidebar = ({ notes , addNoteFunction , clickOncard , onClickDelete}) => {
  return (
    <div className='sidebar'>
      <h1 className='notes'>NOTES</h1>
      <Newcard addNoteFunction ={addNoteFunction}/>
      <Card notes={notes} clickOnCard={clickOncard} onClickDelete={onClickDelete} />
    </div>
    
  )
}
