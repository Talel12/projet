const express=require ('express')
const router=express.Router()
const Contact=require('../model/Contact')
const { check, validationResult } = require('express-validator');







router.post('/',[[
    check('nom','entrer votre nom').not().  isEmpty(),
    check('prenom','entrer votre prenom').not().isEmpty(),
    check('email','entrer votre email').isEmail(),
    check('description','contacter nous').not().isEmpty(),
]], (req,res)=>{const errors=validationResult(req)
        if (!errors.isEmpty()){return res.json({errors:errors.array})}
        const {nom,prenom,email,description}=req.body
     const contact = new Contact({nom,prenom,email,description})
 contact.save()
  .then(contact=>res.json({contact}))
  .catch(err=>console.log(err.message))
    })


  
    module.exports=router