import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Login = (props) => {
  let   [credentials,setCredentials]=useState({email:"",password:""})
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
}
let navigate=useNavigate()

  const handleSubmit=async(e)=>{
       e.preventDefault()
       const response = await fetch("http://localhost/api/auth/login", {
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
      navigate('/')
      props.showAlert("Login Successfully!","success")
    }
    else{
      props.showAlert("Invalid credentials","danger")
    }
  }
  return (
    <div>
      <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={onChange} name="email" value={credentials.email}/>
           
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={onChange} name="password" value={credentials.password}/>
        </div>
        
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Login

