const jwt=require('jsonwebtoken')
const jwtSecret="secret"

module.exports=function(req,res,next){
    const token=req.header('x-auth-token')
    if (!token){
        return res.json({msg:'no token acces denied!'})
    }
    jwt.verify(token,jwtSecret,(err,decoded)=>{
        if (err){
             res.json({msg:'token not valid'})
        }
        req.user=decoded.user
        next()
    })
}