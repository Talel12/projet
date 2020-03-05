import{REGISTER_SUCCES,REGISTER_FAILED,LOGIN_SUCCES,LOGIN_FAILED,AUTH_ERRORS,CLEAR_ERRORS,USER_LOADED, LOGOUT}from '../actions/types'
const initialState={
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    user:null,
    error:null
    
}
const AuthReducer = (state = initialState, action)=>{
switch (action.type){
    case USER_LOADED:
        return{
            ...state,
            isAuthenticated:true,
            user:action.payload
        }
        
    case LOGIN_SUCCES:      
    case REGISTER_SUCCES:
         localStorage.setItem('token',action.payload.token)
         return{
             ...state,
             ...action.payload,
             isAuthenticated:true
            }
    case LOGOUT:
    case LOGIN_FAILED:       
    case AUTH_ERRORS:
    case REGISTER_FAILED:
                localStorage.removeItem('token')
                return {
                     ...state,
                     token:null,
                    isAuthenticated:false,
                    user:null,
                    error:action.payload
                }
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }
      
    default: return state
}}
export default AuthReducer