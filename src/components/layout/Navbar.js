import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    
    function closeNav() { 
        var elements = document.getElementById('navbarSupportedContent')
        if(elements)
        elements.classList.remove('show') 
    }

    const { auth, profile } = props
    var links = auth.emailVerified ? <SignedInLinks profile={profile} action={closeNav}/> : <SignedOutLinks action={closeNav}/>

    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top " >
            <Link className="offset-md-1" to="/">
                <img id="togglenavimage" src="nav-logo.png" alt="LOH2020" ></img>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse col-md-10" id="navbarSupportedContent">
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = ( state ) => {
    //console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)