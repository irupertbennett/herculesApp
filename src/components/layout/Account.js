import React, { Component } from 'react'
import { deleteProject } from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import {Link } from "react-router-dom";
import ProjectList from '../projects/ProjectList'

class Account extends Component {
    render() {
        const { auth, profile, projects } = this.props
        //if user isnt loged in
        if(!auth.emailVerified) return <Redirect to='/signIn' />
        //console.log(projects)
        return (
            <div className="container">
            <br/>
                <h5 className="title">Hello {profile.firstName} {profile.lastName}</h5>  
                <div className="">
                    <h5 className="title">Current Collections</h5>
                    <Link to="/create"><button className="btn register-btn z-depth-0">Register New Set</button></Link>
                    <br/>
                    <br/>
                    { projects ?
                    <div className="col s12 m12">
                        <ProjectList projects={ projects } area={ "myAccount" }/>
                    </div>
                    :
                    <p className="title">Looks like you havent registered any completed Hercules 2020 sets!<br/>If you have a set the please register it by clicking 'Register New Set'.</p>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        projects: state.firestore.ordered.projects
        
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        deleteProject: (project) => dispatch(deleteProject(project))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchtoProps), 
    firestoreConnect((props) => {
        const id = props.auth.uid? props.auth.uid : null
        return[
        { 
            collection: 'projects',
            where:[
                ['authorId', '==', id]
            ]
        }
        ]
    })
)(Account)
