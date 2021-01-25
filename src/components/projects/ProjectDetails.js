import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'

const ProjectDetails = (props) => {
    const { project } = props;
    const { id } = props;
    //console.log(project)
    if(project){
        return(
            <div className="container project-details">
                <br/>
                <br/>
                <div className="card text-center">
                    <div className="card-header">
                        Your collection reference is: <b>{ id }</b>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Collection Details</h5>
                        <p className="card-text">Collection Name: { project.name }</p>
                        <p className="card-text">City: { project.city }</p>
                        <p className="card-text">Comments: { project.Comments }</p>
                    </div>
                    <div className="card-footer text-muted">
                        Posted By: { project.authorId }
                        <br/>
                        { moment(project.createdAt.toDate()).calendar() }
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <h5>Loading project...</h5>
            </div>    
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project: project,
        id: id
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)(ProjectDetails)
