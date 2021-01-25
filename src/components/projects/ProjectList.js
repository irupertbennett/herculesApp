import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({ projects, area }) => {
    
    return (
        <div className="row" >
            
                    { projects && [...projects].reverse().map ((project, index) => {
                        return (
                            <ProjectSummary project = { project } count = {index+1} area = { area } key={ "project_"+index+1 }/>
                        )
                    }) }   
        </div>
    )
}

export default ProjectList