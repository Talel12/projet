import {combineReducers}from 'redux'
import AnnonceReducer from'./AnnonceReducer'
import AuthReducer from './AuthReducer'
import AlertReducer from './AlertReducer'
import ContactReducer from './ContactReducer'
export default combineReducers({Annonce:AnnonceReducer,auth:AuthReducer,alert:AlertReducer,contactus:ContactReducer})