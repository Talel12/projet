const express=require ('express')
const router=express.Router()
const User=require('../model/User')
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken')
const jwtSecret="secret"
const auth=require('../middleware/auth')
//private router
//get the logged in user
router.get('/',auth,(req,res)=>{
    User.findById(req.user.id)
    .then(user=>res.json(user))
    .catch(err=>console.log(err.message))
})
//login the user
router.post('/',[
    check('email', 'entrer votre email').isEmail(),
    check('password', 'entrer votre password').not().isEmpty()],
    (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.json({ errors: errors.array() });
        }
        const { email, password } = req.body
        User.findOne({ email })
            .then(user => {
                if (!user) { return res.status(404).json({ msg: "Ce nom d utilisateur ou mot de passe n existe pas"
            }) }
                else {
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) { console.log(err.message) }
                        else if (isMatch) {
                            const payload = {
                                user: {
                                    id: user.id
                                }
                            }
                            jwt.sign(payload, jwtSecret, { expiresIn: 3600000 }, (err, token) => {
                                if (err) throw err
                                res.json({ token })


                            })
                        } else {
                            return res.status(401).json({ msg: "mot de passe invalide" })
                        }
                    })
                    }

                    }).catch(err=>console.log(err.message))
                })
    
   
module.exports=router