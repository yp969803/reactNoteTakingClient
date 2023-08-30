import React, { useEffect } from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom'
const Navbar = () => {
    let location = useLocation();
    const navigate=useNavigate()
    let handleLogout=(e)=>{
         e.preventDefault()
         localStorage.removeItem('token')
         navigate('/login')
    }
    useEffect(() => {
        // Google Analytics
        console.log(location.pathname)
    }, [location]);
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">iNotebook</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                   </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        {!localStorage.getItem('token')?<div className="btn-group mx-2">
                            <Link to="/login" className={`btn btn-primary ${location.pathname==='/login'&&'active'}`} aria-current="page" >Login</Link>
                            <Link to="/signUp" className={`btn btn-primary ${location.pathname==='/signUp'&&'active'}`}aria-current="page" >SignUp</Link>
                            
                        </div>:<button className='btn btn-primary mx-1' onClick={handleLogout}>LogOut</button>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
