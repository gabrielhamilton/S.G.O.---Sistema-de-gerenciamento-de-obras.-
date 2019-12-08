import React from 'react'
import moment from 'moment'

const ProjectSummary = ({Clientes}) =>{
    return(
        <div className="card z-depth-8 project summary">
                <div className="card-content grey-text text darken-3">
                    <span className="card-title">{Clientes.nome}</span>
                    <p>Feito por {project.authorFirstName} {project.authorLastName}</p>
                    <p className="grey-text">{moment(Clientes.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
            
    )
}

export default ProjectSummary