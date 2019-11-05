import React from 'react'
import { Link } from 'react-router-dom'
import SignedinLink from './SignedinLink'
import SignedoutLink from './SignedoutLink'
import { connect } from 'react-redux'


const Navbar = (props) => {
    const { auth, profile } = props;
    //console.log(auth);
    const links = auth.uid ? <SignedinLink profile={profile}/> : <SignedoutLink/>;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="Container">
                <Link to='/' className="brand-logo">S.G.O</Link>
                {links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) =>{
    console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)