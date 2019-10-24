import React, { Component } from 'react';
import SignInForm from './pages/SignInForm';
import Home from './pages/Home';
import Fire from './config/Fire';

import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    Fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }

  render(){
    return (
        <div>
          {this.state.user ? (<Home />) : (<SignInForm />)}
        </div>
    );
  }
}

export default App;