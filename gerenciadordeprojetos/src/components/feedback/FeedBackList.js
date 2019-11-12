import React from 'react'
import FeedBackSummary from './FeedBackSummary'
import { Link } from 'react-router-dom'

const FeedBackList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <Link to={'/project/' + project.id} key={project.id}>
            <FeedBackSummary project={project} />
          </Link>
        )
      })}  
    </div>
  )
}

export default FeedBackList