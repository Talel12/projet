const mongoose=require('mongoose')
const UserSchema=mongoose.Schema({
    nom:{type:String,
     required:true},
    prenom:{type:String,
        required:true},
    
    email:{type:String,
        required:true},
    
            description:{type:String,
            required:true},
            date:{type:Date,
            default:Date.now}

})
module.exports=mongoose.model('contact',UserSchema)