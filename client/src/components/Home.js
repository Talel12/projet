import React from 'react'
import{connect}from 'react-redux'
import{loadUser}from '../actions/AuthAction'
class Home extends React.Component  {/*
   componentDidMount(){this.props.loadUser()}*/
    render(){
       
   
    return (
        <div>
           <h1>Home Page</h1> 
        </div>
    )
} }
export default /*connect(null,{loadUser})*/(Home)