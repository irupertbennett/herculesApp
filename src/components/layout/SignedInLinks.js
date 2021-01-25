import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'

const SignedInLinks = (props) => {
    
    function action() { 
        props.action()
    }
    return (
        <div className="row offset-md-4 col-md-8">
        <ul className="navbar-nav col-md-8">
            <li className="nav-item" onClick={action}><NavLink className="nav-link" to='/'>Home</NavLink></li>   
            <li className="nav-item" onClick={action}><NavLink className="nav-link" to='/create'>Register New Set</NavLink></li>
            <li className="nav-item" onClick={action}><NavLink className="nav-link" to='/account'>My Account</NavLink></li>
            <li className="nav-item" onClick={action}><a className="nav-link" onClick={ props.signOut }>Log Out</a></li>
        </ul>
        <NavLink onClick={action} className="offset-md-3 btn btn-floating initials" to='/account'><b>{ props.profile.initials }</b></NavLink>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)