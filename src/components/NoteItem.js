import React, { useContext, useEffect, Link } from 'react'
import noteContext from '../context/Notes/NoteContext'
const NoteItem = (props) => {

  const { note, updateNote } = props
  const context = useContext(noteContext);
  const { deleteNote } = context
  const del = () => {

    deleteNote(note._id)

  }
  return (
    
     <div className="col col-md-3 my-2 ">
     <div className="card" style={{ width: "18rem" }}>

<div className="card-body">
  <h5 className="card-title">{note.title}  </h5>
  <p className="card-text">{note.description}</p>
  <p>CreatedAt-{note.date}</p>

  <button type="button" className="btn btn-outline-danger mx-2" onClick={del}>Delete</button>
  <button type="button" className="btn btn-outline-primary mx-2" onClick={() => updateNote(note)}>Edit</button>
</div>
      </div>
      </div>
    
  )
}


export default NoteItem


