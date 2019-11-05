import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state={
     nome:'',
     descricao:''
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
                    <h5 className="grey-text text-darken-3">Cadastrar Projeto</h5>
                    <div className="input-field">
                        <label htmlFor="nome">Nome do Projeto</label>
                        <input type="text" id="nome" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="descricao">Descrição do Projeto</label>
                        <textarea id="descricao" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Criar Projeto</button>
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
