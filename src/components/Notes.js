import React, { useContext, useEffect, useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/Notes/NoteContext'
import AddNote from './AddNote';
import NoteItem from './NoteItem'
const Notes = () => {
  const context = useContext(noteContext);
  let navigate=useNavigate()
  const { notes, setNotes, addNote, getNotes,editNote } = context
  const [note,setNote]=useState({id:"",etitle:"",
  edescription:""})
  useEffect(() =>{
    if(localStorage.getItem('token')){
      getNotes()
    }
    else{
       navigate('/login')

    }
    
  }, [])
  const updateNote = (currentNote) => {
    ref.current.click()
    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description})
  }
  const ref = useRef(null)
  const refClose=useRef(null)
  const handleClick=(e)=>{
      e.preventDefault()
      console.log(note)
      editNote(note.id,note.etitle,note.edescription)
      refClose.current.click()
   } // editNote(note._id,note.title,note.description);
      
  const onChange=(e)=>{
       setNote({...note,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <AddNote />

      <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
        Edit Note
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>

                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Text:</label>
                  <input required type="text" className="form-control" id="title" name="etitle" aria-describedby="emailHelp" onChange={onChange} value={note.etitle}/>

                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description:</label>
                  <input required type="text" className="form-control" name="edescription" id="description" onChange={onChange} value={note.edescription} />
                </div>

                     <div className="modal-footer">
                  <button ref={refClose}  type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button disabled={note.etitle.length<1||note.edescription.length<1} type="submit" className="btn btn-primary" onClick={handleClick}>Save Changes</button>                
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <h1 className='text-center'>My Notes</h1>
      <div className="container text-center">
        <div className="row">
          <div className="h1">
            {notes.length===0&&"No notes to display!!"}
          </div>
       
       {
            notes.map((note) => {
              return <NoteItem key={Math.random()} note={note} updateNote={updateNote} />
            })
          }
       
        </div>
      </div>
    </div>
  )
}


    
      export default Notes
