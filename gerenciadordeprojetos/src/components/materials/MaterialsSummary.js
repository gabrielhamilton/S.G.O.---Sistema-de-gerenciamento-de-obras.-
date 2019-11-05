import React from 'react'
import moment from 'moment'

const MaterialsSummary = ({material}) =>{
    return(
        <div className="card z-depth-8 material summary">
                <div className="card-content grey-text text darken-3">
                    <span className="card-title">{material.nome}</span>
                    <p>Feito por {material.authorFirstName} {material.authorLastName}</p>
                    <p className="grey-text">{moment(material.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
    )
}

export default MaterialsSummary