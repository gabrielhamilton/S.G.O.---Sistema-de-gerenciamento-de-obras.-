import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectDetails = (props) => {
    const { project,auth } = props;
    if (!auth.uid  ) return <Redirect to ='/signin'/>
    if (project){
        return (
        <div className="container section project-details">
            <div className="card z-depth-8">
                <div className="card content">
                    <span className="card-title">{project.nome}</span>
                    <p>{ project.descricao }</p>
                </div>
                <div>
                   <button  className="btn green lighten-2 z-depth-0" >Editar</button>
                   <button  className="btn red lighten-2 z-depth-0" >Deletar</button>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Criado por {project.authorFirstName} {project.authorLastName}</div>
                    <div>{moment(project.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>   
        )
    } else {
        
        return (
            <div className="container center">
                <p>Carregando Clientes...</p>
            </div>
        )
    }
  
}

const mapSatateToProps = (state, ownProps) =>{
    //console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return{
        project: project,
        auth : state.firebase.auth
    }
}

export default compose(
    connect(mapSatateToProps),
    firestoreConnect([
        { collection : 'projects'}
    ])

)(ProjectDetails)