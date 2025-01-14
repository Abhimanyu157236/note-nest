import React from 'react';
import { NotesContext } from './NewNote';
import { useContext } from 'react';

const ViewNotes = () => {
  const notes = useContext(NotesContext);
  const noteArray = [notes]
  return (
   <>
   <div className='grid grid-cols-3 gap-2 '>
   {
    noteArray.map((item)=>{
      return <div>
        <h1>{item}</h1>
      </div>
    })
   }
   </div>
   </>
  );
}

export default ViewNotes;
