import react, { useState } from "react"
import NoteContext from "./NoteContext"

const NoteState = (props) => {
 //get all notes
 let notesInitial=[]
  const [notes, setNotes] = useState(notesInitial)
 const getNotes=async()=>{
  
  const response = await fetch("http://localhost/api/notes/fetchallnotes", {
    method: "GET",
    mode: "cors",

    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem('token')
    },
     // body data type must match "Content-Type" header
     

  });
   const json=await response.json()
    console.log(json)
    setNotes(json.reverse())
  // console.log(response)
 }
  
  //Add a Note
  const addNote = async(title,description) => {
    const response = await fetch(`http://localhost/api/notes/addnotes`, {
      method: "POST",
      mode: "cors",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
       // body data type must match "Content-Type" header
       body:JSON.stringify({title:title,description:description})

    });
    const note=await response.json()
    console.log(note);
    //TODO:API CALL
   const node={
    user: "64117af4feb12af52ef59b89",
    title: title,
    description: description,
    _id: "641aca92c77e776cdd624f4a",
    date:  Date.now(),
    __v: 0
  }
    setNotes(notes.concat(node))
  }
  //Delete a Note
  const deleteNote = async(id) => {
    //todo:API to delete note
    const response = await fetch(`http://localhost/api/notes/deletenote/${id}`, {
      method: "DELETE",
      mode: "cors",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
       // body data type must match "Content-Type" header
    });
    const json=response.json()
    console.log(json)
    let newNotes = notes.filter((note) => note._id !== id)
    setNotes(newNotes)
    console.log('Deleting the Note with ' + id);
  }
  //Edit a Note
  const editNote = async(id, title, description) => {
    
    const response = await fetch(`http://localhost/api/notes/updatenote/${id}`, {
      method: "PUT",
      mode: "cors",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
       // body data type must match "Content-Type" header
       body:JSON.stringify({title:title,description:description})

    });
    console.log(await response.json());
    //todo:API call
    // for (let index = 0; index < notes.length; index++) {
    //   const element = notes[index]
    //   if (element._id === id) {
    //     element.title = title
    //     element.description = description
    //     console.log(element,"In note context")
    //     break;
    //   }
    // }
    const newNotes=notes.map((element)=>{
      if (element._id === id) {
            element.title = title
            element.description = description
            console.log(element,"In note context")
            return element;
          }
          return element;
    })
    setNotes(newNotes)
  }
  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote,getNotes,editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState