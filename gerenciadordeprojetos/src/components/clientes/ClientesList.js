import React from 'react'
import ClienteSummary from './ClienteSummary'
import { Link } from 'react-router-dom'

const ClienteList = ({Clientes}) => {
  return (
    <div className="Cliente-list section">
      { Clientes && Clientes.map(Cliente => {
        return (
          <Link to={'/Cliente/' + Cliente.id} key={Cliente.id}>
            <ClienteSummary Cliente={Cliente} />
          </Link>
        )
      })}  
    </div>
  )
}

export default ClienteList