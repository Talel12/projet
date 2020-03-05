const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator');
const Annonce = require('../model/Annonce')

//get public annonce
router.get('/public',(req,res)=>{
    const categorie=req.query.categorie;
   const type=req.query.typeAnnonce;
    Annonce.find({ categorie: categorie , typeAnnonce: type })
    .then(annonce => res.json(annonce), console.log(categorie + type))
        .catch(err => console.log(err.message))
})


//get annonce
//private route
router.get('/', auth, (req, res) => {
    Annonce.find({ user: req.user.id })
        .then(annonce => res.json(annonce))
        .catch(err => console.log(err.message))
})
//update annonce
//private route
router.put('/:id', auth, (req, res) => {
    const { nom } = req.body
    let annonceFields = {}
    if (nom) annonceFields.nom = nom
    Annonce.findById(req.params.id)
        .then(annonce => {
            if (!annonce) { return res.json({ msg: 'annonce not found' }) }
            else if (annonce.user.toString() !== req.user.id) { res.json({ msg: 'non autoriser' }) }
            else {
                Annonce.findByIdAndUpdate(req.params.id, { $set: annonceFields }, (err, data) => {
                    res.json({ msg: "annonce modifié" })
                })
            }
        })
        .catch(err => console.log(err.message))
})
//add annonce
//private route
router.post('/', [auth, [
    check('categorie', 'categorie is required').not().isEmpty(),
    check('typeAnnonce', 'typeAnnonce is required').not().isEmpty(),
    check('posMap', 'posMap is required').not().isEmpty(),
    check('disponibilite', 'dispo is required').not().isEmpty(),
    check('title', 'title is required').not().isEmpty(),
    check('prix', 'prix is required').not().isEmpty()]],
    (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) { return res.json({ errors: errors.array() }) }
        const { categorie, typeAnnonce, posMap, disponibilite, title, prix, discription, galerie, meuble, option, surfaceHabitable, surfaceTerrain, nbrChambre, nbrSalleDeBain, nbrEtage, nbrPiece, dateConstruction } = req.body
        const newAnnonce = new Annonce({
            user: req.user.id,
            categorie,
            typeAnnonce,
            posMap,
            disponibilite,
            title,
            prix,
            discription,
            galerie,
            meuble,
            option,
            surfaceHabitable,
            surfaceTerrain,
            nbrChambre,
            nbrSalleDeBain,
            nbrEtage,
            nbrPiece,
            dateConstruction
        })
        newAnnonce.save()
            .then(annonce => res.json({ annonce }))
            .catch(err => console.log(err.message))
    })

//delete annonce
//private route
router.delete('/:id', auth, (req, res) => {

    Annonce.findById(req.params.id)
        .then(annonce => {
            if (!annonce) { return res.json({ msg: 'annonce not found' }) }
            else if (annonce.user.toString() !== req.user.id) { res.json({ msg: 'non autoriser' }) }
            else {
                Annonce.findByIdAndDelete(req.params.id, (err, data) => {
                    res.json({ msg: "annonce supprimé" })
                })
            }
        })
        .catch(err => console.log(err.message))
})


module.exports = router