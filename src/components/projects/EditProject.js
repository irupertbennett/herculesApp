import React, { Component } from 'react'
import { editProject } from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import firebase from '../../config/firebaseConfig'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class EditProject extends Component {
    state = {
        name: '',
        city: '',
        comments: '',
        id: ''
    }
    async componentDidMount(){
        console.log(this.props.id)
        firebase.firestore().collection('projects').where("id", "==", this.props.id).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                console.log("hello" + doc.name)
                this.setState({
                    ...doc.data(),
                    id: this.props.id
                })
            })
        })
     }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
        console.log(this.state)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.editProject(this.state)
        this.props.history.push('/account')
    }
    render(){
        const { project, auth, id } = this.props
        
        if(!auth.emailVerified) return <Redirect to='/signIn' />
        if(project){
            if(auth.uid === project.authorId){
            return (
                <div className="container">
                    <form onSubmit={ this.handleSubmit }>
                        <h5 className="grey-text text-darken-3">Edit Collection</h5>
                        <div className="form-group">
                            { !project.name ? <label htmlFor="city">City</label> : null}
                            <input className="form-control" type="text" id="name" defaultValue= {project.name} onChange={ this.handleChange }/>
                        </div>
                        <div className="form-group">
                            { !project.city ? <label htmlFor="city">City</label> : null}
                            <input className="form-control" type="text" id="city" defaultValue= {project.city} onChange={ this.handleChange }/>
                        </div>
                        <div className="form-group">
                            { !project.comments ? <label htmlFor="comments">Comments</label> : null }
                            <textarea className="form-control" id="comments"  className="materialize-textarea" defaultValue={project.comments} onChange={ this.handleChange }></textarea>
                        </div>
                        <div className="form-group">
                            <button className="btn register-btn z-depth-0"><b>Confirm Details</b></button>
                        </div>
                    </form>
                </div>
            )
            } else{
                return <Redirect to='/account' />
            }
        }else{
            return(
                <div>
                    <h5>loading...</h5>
                </div>
            )
        }
    }   
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth,
        id: id
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        editProject: (project) => dispatch(editProject(project))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchtoProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)(EditProject)
