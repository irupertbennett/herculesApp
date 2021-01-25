import React, { Component } from 'react'
import { connect } from 'react-redux'
import { resetPassword } from '../../store/actions/authAction'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.emailVerified)
        this.props.resetPassword(this.state.email);
    }
    render() {
        const { authError, auth } = this.props
        if(auth.emailVerified) return <Redirect to='/account' />
        return (
            <div className="container">
            <br/>
            <br/>
                <form onSubmit={ this.handleSubmit } className="white">
                    <h3 className="text-center">Reset Password</h3>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" type="email" id="email" onChange={ this.handleChange } />
                    </div>
                    <div className="form-group">
                        <button className="btn register-btn">Reset Password</button>
                        <div className="auth-error text-center">
                            { authError ? authError==="Thank you for signing up! An email has be sent to your account, please follow the instructions there."? null: <p>{ authError }</p> : null }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetPassword: (creds) => dispatch(resetPassword(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
