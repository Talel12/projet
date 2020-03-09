const express=require ('express')
const router=express.Router()
const User=require('../model/User')
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken')
const jwtSecret="secret"
const auth = require('../middleware/auth')

//register users
router.post('/',[check('nom','entrer votre nom').not().  isEmpty(),
check('prenom','entrer votre prenom').not().isEmpty(),
check('adress','entrer votre adress').not().isEmpty(),
check("password", "invalid password")
        .isLength({ min: 4 })
        .custom((value,{req, loc, path}) => {
            if (value !== req.body.confirmation) {
                // trow error if passwords do not match
                throw new Error("Passwords don't match");
            } else {
                return value;
            }
        }),
check('confirmation','confirm votre mot de passe').not().isEmpty(),
check('email','entrer votre email').isEmail(),
check('cin','entrer votre cin').not().  isEmpty(),

],(req,res)=>{
    const erreur=validationResult(req)
    if (!erreur.isEmpty() ){return res.json({erreur:erreur.array()})}

const{nom,prenom,adress,password,confirmation,email,cin}=req.body
User.findOne({email})
.then (user=>{
    if (user){res.status(400).json({msg:'user is already exist'})}
    else{user=new User({
        nom,
        prenom,
        email,
        password,
        confirmation,
        adress,
        cin}) 

        var bcrypt = require('bcryptjs');
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
              user.password=hash
              user.save()
              const payload={
                  user:{
                      id:user.id
                    }}
                    jwt.sign(payload,jwtSecret,{ expiresIn: 3600000},(err,token)=>{if (err)throw err
                    res.json({token})})
                
            });
        });
    
    }

}).catch(err=>console.log(err.message))
})



  //update users 

  router.put('/:id', auth, (req, res) => {
    const { nom,prenom,adress,password,confirmation,email,cin } = req.body
    let userFields = {}
    if (nom) userFields.nom = nom
    if (prenom) userFields.prenom = prenom
    if (adress) userFields.adress = adress
    if (password) userFields.password = password
    if (confirmation) userFields.confirmation =confirmation
    if (email) userFields.email = email
    if (cin) userFields.cin = cin
    User.findById(req.params.id)
        .then(user => {
            if (!user) { return res.json({ msg: 'user not found' }) }
        
            else {
                User.findByIdAndUpdate(req.params.id, { $set: userFields }, (err, data) => {
                    res.json({ msg: "annonce modifié" })
                })
            }
        })
      
})

//get user 

router.get('/:id', auth, (req, res) => {
   User.find({ user: req.user.id })
        .then(user => res.json(user.nom))
        .catch(err => console.log(err.message))
})
module.exports=router


