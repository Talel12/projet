import React, { Component } from 'react'
import { connect } from "react-redux"
import { loginUser, clearError } from '../actions/AuthAction';
import { setAlert, removeAlert } from '../actions/AlertActions'
import { v4 as uuidv4 } from 'uuid';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }
  handelChange = e => { this.setState({ [e.target.name]: e.target.value }) }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/')
    }

    if (nextProps.auth.error === "Ce nom d utilisateur ou mot de passe n existe pas" || nextProps.auth.error === "mot de passe invalide") {
      let id = uuidv4()
      this.props.setAlert(nextProps.auth.error, 'danger', id)
      setTimeout(() => {
        this.props.removeAlert(id)
        this.props.clearError()
      }, 5000)
    }
  }
  loginNow = () => {
    if (this.state.email === '' || this.state.password === '') {
      let id = uuidv4()
      this.props.setAlert('Veuillez renseigner tous les champs', 'danger', id)
      setTimeout(() => { this.props.removeAlert(id) }, 5000)
    }
    else {
      this.props.loginUser({
        email: this.state.email,
        password: this.state.password,
      })

    }
  }
  render() {
    return (
      <div className="connexion"> <h1>Se connecter</h1>   <form>
        <div className="form-group">
          <label >Email address</label>
          <input type="email" onChange={this.handelChange} name="email" className="form-control" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label >Password</label>
          <input type="password" onChange={this.handelChange} className="form-control" name="password" />
        </div>

        <button onClick={this.loginNow} className="btn btn-outline-success m-2" type="button">Submit</button>
      </form>
      </div>
    )
  }

}
const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { loginUser, setAlert, removeAlert, clearError })(Login)
