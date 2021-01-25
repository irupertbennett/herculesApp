import React, {Component} from 'react'
import { deleteProject } from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ProjectSummary extends Component {
    handleDelete = (e) => {
        e.preventDefault()
        this.props.deleteProject(e.target.id)
    }
    render(){
        const { project, count, area } = this.props
    return (
        <div className="col-sm-6 collection-item">
        
            { area === "myAccount" ? 
            <div className="card">
                <Link className="card-body" to={'/project/' + project.id} key={ "account_"+project.id }>
                    <p className="card-title">My Set {count}</p> 
                    </Link>
                    {/* <a className="" onClick={ this.handleDelete }><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a> */}
                </div>

                /* <Link to={'/editProject/' + project.id} key={ "edit"+project.id }>
                    <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                </Link> */
                
                    
            
            :
                <div className="card">
                    <Link to={'/project/' + project.id} key={ "dashboard_"+project.id }>
                        <p className="collection-icon-text">Registered Set {count}/1750</p> 
                    </Link>
                </div>}
        </div>
    )
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        deleteProject: (projectId) => dispatch(deleteProject(projectId))
    }
}

export default connect(null, mapDispatchtoProps)(ProjectSummary)