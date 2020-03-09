import{CONTACT_SUCCES, CONTACT_FAILED,CLEAR_ERRORS}from '../actions/types'
const initialState={
    
  
    iscontact:null,
    error:null
    
}
const ContactReducer = (state = initialState, action)=>{
    switch (action.type){
        
        
    case CONTACT_SUCCES:
        return {
            ...state,
            ...action.payload,
            iscontact:true,

        }
case CONTACT_FAILED: return{
    ...state,
    iscontact:false,
    error:action.payload

}

case CLEAR_ERRORS:
    return {
        ...state,
        error:null
    }

default: return state


    }
}
export default ContactReducer