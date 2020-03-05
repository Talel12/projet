import {combineReducers}from 'redux'
import AnnonceReducer from'./AnnonceReducer'
import AuthReducer from './AuthReducer'
import AlertReducer from './AlertReducer'
export default combineReducers({Annonce:AnnonceReducer,auth:AuthReducer,alert:AlertReducer})