import React from 'react'

export const Card = ({notes ,clickOnCard , onClickDelete }) => {
  


  return (
    <>
        {notes.map((anote, index) => 

            <div className='card' key={index}>
                <h3>{anote.title}</h3>
                <p>{anote.body.substr(0,100) + "..."}</p>
                <h6>{anote.lastModifiedDate}</h6>
                <button className='btn' onClick={() => clickOnCard(index)} >Open</button>
                <button className='delete-btn btn' onClick={() => onClickDelete(index)} >Delete</button>
            </div>
            
        )}
    </>
    
    )
}
