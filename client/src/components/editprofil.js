import React, { Component } from 'react'













// import { reduxForm } from 'redux-form'


class EditProfil extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handelChange = e => { this.setState({ [e.target.name]: e.target.value }) }
    
    render() {

        return (
            <div className='register'><h1>inscription</h1>
                <div className="form">

                    <input name="nom" value={this.state.nom} type="text" onChange={this.handelChange} placeholder="votre nom" />
                    <input name="prenom" value={this.state.prenom} type="text" onChange={this.handelChange} placeholder="votre prenom" />
                    <input name="email" value={this.state.email} type="mail" onChange={this.handelChange} placeholder="votre email" />
                    <input name="adress" value={this.state.adress} type="text" onChange={this.handelChange} placeholder="votre adresse" />
                    <input name="cin" type="number" value={this.state.cin} onChange={this.handelChange} placeholder="votre cin" />
                    <input name="numtel" type="number"value={this.state.numtel} onChange={this.handelChange} placeholder="votre numéro de téléphone" />
                    <input name="password" type="text"value={this.state.password} onChange={this.handelChange} placeholder="votre mot de passe" />
                    <input name="confirmation" type="text"  value={this.state.confirmation} onChange={this.handelChange} placeholder="confirmer votre mot de passe" />

                </div>
                <button className="btn btn-outline-success m-2" onClick={() => this.props.editprofil
                (this.state._id, {nom: this.state.nom, prenom: this.state.prenom, email: this.state.email,
                     password: this.state.password, confirmation: this.state.confirmation, cin: this.state.cin, adress: this.state.adress})}>Edit</button>
                <button className="btn btn-outline-success m-2"  onClick={()=> this.props.history.goBack()}>Cancel</button>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default (EditProfil)
