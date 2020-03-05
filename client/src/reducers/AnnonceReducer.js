import { ADD_ANNONCE ,DELETE_ANNONCE,UPDATE_ANNONCE} from "../actions/types";


const initialState=[
{
    nom:"ronaldo"
    }
    ,
    {
   
    nom:"cristiano"
    }
]
const AnnonceReducer=(state=initialState,action)=>{
    switch(action.type){
        default:
             return state
    }
}
export default AnnonceReducer 