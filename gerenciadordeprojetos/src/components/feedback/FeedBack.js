import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'


class CreateProject extends Component {
    state={
     nome:'',
     descricao:'',
     image:'',
     imageURL:'',
     progress: 0,
     comentarios:''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state)
        this.props.history.push('/');
    }

    
    render() {
        const { auth } = this.props;
        if (!auth.uid ) return <Redirect to ='/signin'/>
        return (
            <div className="Container">
                <form onSubmit={this.handleSubmit} className="white">        
                    <div className="input-field">
                        <label htmlFor="comentarios">Adicionar Comentarios</label>
                        <textarea id="comentarios" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Publicar comentario</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        createProject:(project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)
