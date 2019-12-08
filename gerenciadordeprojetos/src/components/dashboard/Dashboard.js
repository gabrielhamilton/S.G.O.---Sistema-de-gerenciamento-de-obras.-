import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import MaterialsList from '../materials/MaterialsList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'



class Dashboard extends Component {
  render() {
    const { materials,projects, auth, notifications} = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s4 m4">
            <ProjectList projects={projects} />
          </div>
          <div className="col s4 m4 offset-m1">
           <Notifications notifications = {notifications}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    materials: state.firestore.ordered.materials,
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'materials',},
    { collection: 'projects'},
    { collection: 'notifications', limit:3, orderBy:['time','desc']}
  ])
)(Dashboard)