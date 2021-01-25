import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render(){
        const { projects, auth } = this.props
        var len = null
        if (projects){
        len = projects.length
        }
        //console.log(projects)
        //if user isnt loged in
        if(!auth.emailVerified) return <Redirect to='/signIn' />
        
        return(
            <div className="dashboard container">
            <br/>
                <div className="row">
                    <h3 className=" offset-md-1 title2">Registered Sets</h3>
                    <h3 className="offset-xs-1 col-xs-11 offset-md-6 totalSets">{len}/1750</h3>
                </div>
                <div className="registered-sets">
                    <ProjectList projects={ projects } area={ "Dashboard" }/>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    
    return{
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStatetoProps), 
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc']}//,
        //{ collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ])
)(Dashboard)