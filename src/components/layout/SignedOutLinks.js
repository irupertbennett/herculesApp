import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = (props) => {

    function action() { 
        props.action()
    }
    return (
        <div className="offset-md-5">
            <ul className="navbar-nav">
                <li className="nav-item" onClick={action}><NavLink className="nav-link" to='/signup'>Sign Up</NavLink></li>   
                <li className="nav-item" onClick={action}><NavLink className="nav-link" to='/signin'>Log In</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOutLinks