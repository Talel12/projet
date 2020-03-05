import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Alerts from './components/Alerts'
import Login from './components/Login'
import {
  BrowserRouter ,
  Switch,
  Route,
  } from "react-router-dom";
import Annonce from './components/Annonce';
import Register from './components/Register';
import setAuthToken from './utils/setAuthToken'
import PrivateRoute from './components/privateRoute'
import MapAfficher from './components/Map';
import { Map } from 'react-leaflet';
if (localStorage.token){setAuthToken(localStorage.token)}
function App() {
  return (
    <BrowserRouter>
    <MapAfficher/>
    <Navbar  id="navbar"/>
    <Alerts/>
    <Switch>
      <Route exact path ="/Home" component={Home}/>
      <Route exact path="/About" component={About}/>
      <PrivateRoute exact path="/annonce" component={Annonce}/>
      <Route exact path="/inscription" component={Register}/>
      <Route exact path="/connect" component={Login}/>
    </Switch>
   
    </BrowserRouter>
  );
}

export default App;
