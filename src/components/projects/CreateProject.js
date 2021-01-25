import React, { Component } from 'react'
import { createProject } from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state = {
        name: '',
        city:'',
        comments: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createProject(this.state)
        this.props.history.push('/account')
    }
    render() {
        const { auth } = this.props
        //if user isnt loged in
        if(!auth.emailVerified) return <Redirect to='/signIn' />
        return (
            
            <div className="container">
            <br/>
            <h5 className="title">Hi folks!<br/>Use this form to register your 2020 Hercules set!<br/> This is just for fun and to give us an idea of how many sets have been completed and where in the world they are!</h5>
            <p className="title">(Please only use this if you genuinly have a completed set. If you have multiple sets, please register them individually.)</p>    
                <form onSubmit={ this.handleSubmit }>
                    <h3 className="text-center">Register New Set</h3>
                    <p className="text-center">Congratualtions on completing a set!</p>

                    <div className="form-group">
                        <label htmlFor="name">Name your set</label>
                        <input className="form-control" type="text" id="name" onChange={ this.handleChange } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" type="text" id="city" onChange={ this.handleChange } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comments">Comments</label>
                        <textarea className="form-control" id="comments" onChange={ this.handleChange }></textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn register-btn z-depth-0"><b>Register Set</b></button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(CreateProject)
