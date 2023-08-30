
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/Notes/NoteState";
import Edit from "./components/Edit";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";
function App(){
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  return (
    <> 
    <NoteState>
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home showAlert={showAlert} />} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/edit" element={<Edit/>} />
      <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
      <Route exact path="/signup" element={<SignUp showAlert={showAlert}/>} />
      </Routes>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
