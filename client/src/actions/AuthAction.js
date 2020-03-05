import{REGISTER_SUCCES,REGISTER_FAILED,LOGIN_SUCCES,LOGIN_FAILED,AUTH_ERRORS,CLEAR_ERRORS,USER_LOADED, LOGOUT}from './types'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'


export const loadUser=()=>dispatch=>{
    
    if (localStorage.token){setAuthToken(localStorage.token)}
    
    
    axios.get('/api/auth')
.then(res=>dispatch({
    type:USER_LOADED,
    payload:res.data
}))
.catch(()=>dispatch({
    type:AUTH_ERRORS
}))
}


//load user

export const register=formData=>dispatch=>{
    const config ={
        headers:{'Content-Type':'application/json'}
    }
    axios.post('/api/user',formData,config)
    .then(res=>{dispatch({
        type:REGISTER_SUCCES,
        payload:res.data
    })
    dispatch(loadUser())
})
    .catch(err=>dispatch({
        type:REGISTER_FAILED,
        payload:err.response.data.msg
}))
}
export const clearError=()=>dispatch=>{
    dispatch({type:CLEAR_ERRORS})
}

/*************************************************************/

export const loginUser=formData=>dispatch=>{
    const config ={
        headers:{'Content-Type':'application/json'}
    }
    axios.post('/api/auth',formData,config)
    .then(res=>{dispatch({
        type:LOGIN_SUCCES,
        payload:res.data
    })
    dispatch(loadUser())
})
    .catch(err=>dispatch({
        type:LOGIN_FAILED,
        payload:err.response.data.msg
}))
}
export const Logout=()=>dispatch=>{
    dispatch({
        type:LOGOUT
    })
}

