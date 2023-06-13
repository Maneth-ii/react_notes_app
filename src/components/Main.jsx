import React, { useEffect, useRef } from 'react'

export const  Main = ({ onTitleChange , onBodyChange , title , body}) => {

  // focus Title input field when state update
  const titleInputField  = useRef(0);
  useEffect(() =>{
    titleInputField.current.focus();
  },[]);


  return (
    <div className='main'>
      <div className='edit-notes'>
        <input type="text" value={title} ref={titleInputField} onChange={onTitleChange} className='add-title' name="" id="" placeholder='Add Title: '/>
        <textarea name="" value={body} onChange={onBodyChange} className='note-area' id="" cols="30" rows="10"></textarea>
      </div>
      <div className='display'>
        <h1 className='display-title'>{title}</h1>
        <h5 className='display-body'>{body}</h5>
      </div>
    </div>
  )
}
