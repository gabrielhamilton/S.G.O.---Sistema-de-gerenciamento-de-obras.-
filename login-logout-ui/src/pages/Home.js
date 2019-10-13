import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import fire from './config/fire';

class Home extends Component {
    constructor(props){
        super(props);
    }

render(){
    return (
        <div className='col-md-6'>
            <h1>Home page</h1>
        </div>
    );
}
}

export default Home;
