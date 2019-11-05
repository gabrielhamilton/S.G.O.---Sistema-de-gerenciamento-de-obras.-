import React from 'react'
import MaterialsSummary from './MaterialsSummary'
import { Link } from 'react-router-dom'

const MaterialsList = ({materials}) => {
  return (
    <div className="materials-list section">
      { materials && materials.map(material => {
        return (
          <Link to={'/material/' + material.id} key={material.id}>
            <MaterialsSummary material={material} />
          </Link>
        )
      })}  
    </div>
  )
}

export default MaterialsList