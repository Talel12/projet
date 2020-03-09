import{CONTACT_SUCCES, CONTACT_FAILED,CLEAR_ERRORS}from './types'
import axios from 'axios'



    
   
    
    
   
export const contact=formData=>dispatch=>{
    const config ={
        headers:{'Content-Type':'application/json'}
    }
    axios.post('/api/contact',formData,config)
    .then(res=>{dispatch({
        type:CONTACT_SUCCES,
        payload:res.data
    })
  
})
    .catch(err=>dispatch({
        type:CONTACT_FAILED,
        payload:err.response.data.msg
}))
}
export const clearError=()=>dispatch=>{
    dispatch({type:CLEAR_ERRORS})
}

