import React,{Link} from 'react'
function Register() {
  return (
    <div>
      <h1>Register</h1>
     <form action="/register" method="post">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="username"/>
        <label for="password">Passsword</label>
        <input type="text" id="password" name="password" placeholder="Password"/>
        <button >Signup</button>
    </form>
   <ul>
        <li ><Link to="/">Home</Link></li>
        <li ><Link to="/login">Login</Link></li>
    </ul>
    </div>
  )
}

export default Register
