import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const MaterialsDetails = (props) => {
    const { material,auth } = props;
    if (!auth.uid ) return <Redirect to ='/signin'/>
    if (material){
        return (
        <div className="container section material-details">
            <div className="card z-depth-8">
                <div className="card content">
                    <span className="card-title">{material.nome}</span>
                    <p>{ material.descricao }</p>
                </div>
                <div className="card content">
                    <p>{ material.quantidade }</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Criado por {material.authorFirstName} {material.authorLastName}</div>
                    <div>{moment(material.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>   
        )
    } else {
        
        return (
            <div className="container right">
                <p>Carregando Materiais...</p>
            </div>
        )
    }
  
}

const mapSatateToProps = (state, ownProps) =>{
    //console.log(state);
    const id = ownProps.match.params.id;
    const materials = state.firestore.data.materials;
    const material = materials ? materials[id] : null
    return{
        material: material,
        auth : state.firebase.auth
    }
}

export default compose(
    connect(mapSatateToProps),
    firestoreConnect([
        { collection : 'materials'}
    ])

)(MaterialsDetails)
