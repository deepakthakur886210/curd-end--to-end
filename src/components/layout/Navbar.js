import React from 'react'
import { NavLink} from 'react-router-dom';
import Login from '../pages/Login';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className='container'>
                <div className="container-fl/*  */uid">
                    <a className="navbar-brand" href="#">My Crud App</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {localStorage.getItem('login') ? < li className="nav-item">
                                <NavLink exact to="/home" className="nav-link" >Home</NavLink>
                            </li> : <Login/>}
                            <li className="nav-item">
                                <NavLink exact to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/contact" className="nav-link" >Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;