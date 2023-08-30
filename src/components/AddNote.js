import React,{useContext, useState} from 'react'
import noteContext from '../context/Notes/NoteContext'
const AddNote = () => {
    const context=useContext(noteContext);
    const {addNote,notes,setNotes}=context
    const [note,setNote]=useState({title:"",
    description:""})
    const handleClick=(e)=>{
        e.preventDefault()
        addNote(note.title,note.description);
        document.getElementById('title').value=""
        document.getElementById('description').value=""
    }
    const onChange=(e)=>{
         setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div className="container">
    <h1 className="display-4">New Note</h1>
    <form>
      
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Text:</label>
        <input required type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
          
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description:</label>
        <input required type="text" className="form-control"  name="description" id="description" onChange={onChange}/>
      </div>
      
      <button disabled={note.title.length<1||note.description.length<1}  type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
    </form>
  </div>
  )
}

export default AddNote
