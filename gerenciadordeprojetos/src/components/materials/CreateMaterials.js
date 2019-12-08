import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createMaterials} from '../../store/actions/materialActions'
import { Redirect,Link } from 'react-router-dom'
import MaterialsSummary from './MaterialsSummary'
import FileUploader from 'react-firebase-file-uploader'
import fbConfig from '../../config/fbConfig'
import firebase from 'firebase'



class CreateMaterials extends Component {
    state={
     nome:'',
     descricao:'',
     quantidade:'',
     image:'',
     imageURL:'',
     progress: 0
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        this.props.createMaterials(this.state);
        this.props.history.push('/');
    }
    handleUploadStart =()=>{
        this.setState({
            progress: 0
        })
    }
    handleUploadSuccess= filename =>{
        this.setState({
            image:filename,
            progress: 100
        })
        firebase.storage().ref('materiais').child(filename).getDownloadURL()
        .then(url=>this.setState({
            imageURL:url
        }))
    }
    handleProgress = progress =>{
        this.setState({
            progress:progress
        })
    }

    render() {
        console.log(this.state)
        const { materials,auth } = this.props;
        if (!auth.uid ) return <Redirect to ='/signin'/>
        return (
            
            <div className="Container">
            <div className="col s12 m6">
                { materials && materials.map(material => {
            return (
                <Link to={'/material/' + material.id} key={material.id}>
                <MaterialsSummary material={material} />
                </Link>
               )
            })}  
            </div>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Cadastrar Material</h5>
                    <div className="input-field">
                        <label htmlFor="nome">Nome do Material</label>
                        <input type="text" id="nome" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="descricao">Descrição do Material</label>
                        <textarea id="descricao" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                    <label htmlFor="descricao">Adicinar Documento</label>
                        <br/>
                        <br/>
                        <FileUploader
                        accept="images/*"
                        name='images'
                        storageRef={firebase.storage().ref('materiais')}
                        onUploadStart={this.handleUploadStart}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress ={this.handleProgress}
                        />
                        <br/>
                        <p>{this.state.progress}%</p>
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Adicionar Material</button>
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
        createMaterials:(materials) => dispatch(createMaterials(materials))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateMaterials)