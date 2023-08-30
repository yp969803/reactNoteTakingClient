
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
const SignUp = (props) => {
  let   [credentials,setCredentials]=useState({email:"",password:"",name:""})
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
}
let navigate=useNavigate()

  const handleSubmit=async(e)=>{
       e.preventDefault()
       const response = await fetch("http://localhost/api/auth/signUp", {
       method: "POST",
       mode: "cors",

       headers: {
      "Content-Type": "application/json",
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxMTdhZjRmZWIxMmFmNTJlZjU5Yjg5In0sImlhdCI6MTY3OTMwNjcwMCwiZXhwIjoxNjgyOTA2NzAwfQ.WAbWAiW6OMJsV0GbHAnFtn6QXFaVOkfnGW_htUrESL8"
    },
     // body data type must match "Content-Type" header
     body:JSON.stringify(credentials)
    });
   const json=await response.json()
    console.log(json)
    if(json.success){
      //save the auth-token and redierect
      localStorage.setItem('token',json.authtoken)
      navigate('/login')
    }
    else{
      props.showAlert("Invalid credentials",'danger')
    }
  }
  return (
    <div>
      <div className="container">
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Name:</label>
          <input type="text" className="form-control" id="exampleInputPassword1" onChange={onChange} name="name" value={credentials.name} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={onChange} name="email" value={credentials.email} required minLength={5}/>
           
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={onChange} name="password" value={credentials.password} required minLength={5}/>
        </div>
       <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    </div>
  )
}

export default SignUp

