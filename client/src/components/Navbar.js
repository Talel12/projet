import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux'
import { Logout } from '../actions/AuthAction'
export const Navbar = props => {

  const userConnected = () => (

    <form className="row  d-flex justify-content-between w-60 ">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active hello"> Hello,{props.auth.user && props.auth.user.nom + ' ' + props.auth.user.prenom}</li>
        <Link to="/Annonce">
      <button className="btn btn-outline-success m-2" type="button">Deposer votre annonce</button>
    </Link>
        <li className="nav-item active">
          <button className="btn btn-outline-success m-2 br" type="button">modifier mon profil</button>
        </li>
        <li className="nav-item active"> <button onClick={props.Logout} className="btn btn-outline-success m-2" type="button">Logout</button></li>


      </ul>
    </form>

  )

  const guesst = () => (<form className=" d-flex justify-content-between ">
    <Link to="/Annonce">
      <button className="btn btn-outline-success m-2" type="button">Deposer votre annonce</button>
    </Link>
    <Link to="/connect">
      <button className="btn btn-outline-success m-2" type="button">Connexion </button></Link>
    <Link to="/inscription">
      <button className="btn btn-outline-success m-2" type="button">Inscription</button></Link>

  </form>)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/About">About <span className="sr-only">(current)</span></Link>
            </li>

          </ul>
          {
            props.auth.isAuthenticated ? userConnected() : guesst()
          }
        </div>
      </nav>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, { Logout })(Navbar)