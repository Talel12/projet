import React, { Component } from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';


import {setAlert,removeAlert} from '../actions/AlertActions'
import{register,clearError}from '../actions/AuthAction'










// import { reduxForm } from 'redux-form'


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            email: '',
            adress: '',
            cin: '',
            password: '',
            confirmation: '',
            numtel: ''
        }
    }
    handelChange = e => { this.setState({ [e.target.name]: e.target.value }) }
    registernow = () => {

        if (this.state.nom === '' ||
            this.state.prenom === '' || this.state.password === '' || this.state.confirmation === ''
            || this.state.adress === '' || this.state.cin === '' || this.state.email === '' || this.state.numtel === '') {
            let id = uuidv4()
            this.props.setAlert('tous les champs sont obligatoires', 'danger', id)
            setTimeout(() => { this.props.removeAlert(id) }, 5000);
        }
        else if (this.state.password !== this.state.confirmation) {
            let id = uuidv4()
            this.props.setAlert('confirmation mot de passe invalide', 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
                this.props.clearError()
            }, 5000)
        }

        else if (!this.state.email.includes('@')) {

          

            let id = uuidv4()
            this.props.setAlert('svp entrer une valide adresse email', 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
                this.props.clearError()
            }, 5000)
        }
        else if (this.state.password.length < 8) {
            let id = uuidv4()
            this.props.setAlert('svp créer un mot de passe sécurisé.', 'danger', id)

            setTimeout(() => {
                this.props.removeAlert(id)
                this.props.clearError()
            }, 5000)
        }

        else if (this.state.password.length < 8) {
            let id = uuidv4()
            this.props.setAlert('svp créer un mot de passe sécurisé.', 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
                this.props.clearError()
            }, 5000)
        }

        else {
            this.props.register({
                nom: this.state.nom,
                prenom: this.state.prenom,
                email: this.state.email,
                adress: this.state.adress,
                cin: this.state.cin,
                password: this.state.password,
                confirmation: this.state.confirmation,
                numtel: this.state.numtel
            })
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }

        if (nextProps.auth.error === 'user is already exist') {
            let id = uuidv4()
            this.props.setAlert(nextProps.auth.error, 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
                this.props.clearError()
            }, 5000)
        }

    }

    render() {

        return (
            <div className='register'><h1>inscription</h1>
                <div className="form">

                    <input name="nom" type="text" onChange={this.handelChange} placeholder="votre nom" />
                    <input name="prenom" type="text" onChange={this.handelChange} placeholder="votre prenom" />
                    <input name="email" type="mail" onChange={this.handelChange} placeholder="votre email" />
                    <input name="adress" type="text" onChange={this.handelChange} placeholder="votre adresse" />
                    <input name="cin" type="number" onChange={this.handelChange} placeholder="votre cin" />
                    <input name="numtel" type="number" onChange={this.handelChange} placeholder="votre numéro de téléphone" />
                    <input name="password" type="text" onChange={this.handelChange} placeholder="votre mot de passe" />
                    <input name="confirmation" type="text" onChange={this.handelChange} placeholder="confirmer votre mot de passe" />

                </div>
                <button onClick={this.registernow} className="btn btn-outline-success m-2" type="button">inscrit </button>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { setAlert, removeAlert, register, clearError })(Register)
