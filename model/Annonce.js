const mongoose = require('mongoose')
const AnnonceSchema = mongoose.Schema({

    //********************    champs commun    ***************** */
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },

    categorie: {
        type: String,
        required: true
    },
    typeAnnonce: {
        type: String,
        required: true
    },

    posMap: {
        lat: {
            type: String,
            required: true
        },
        lng: {
            type: String,
            required: true
        }
    },

    disponibilite: {
        type: Boolean,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    prix: {
        type: String,
        required: true
    },
    discription: { type: String },
    galerie: [/*Schema.Types.Mixed*/String],

    dateCreation: {
        type: Date,
        default: Date.now
    },
    //********************    champs differents    ***************** */
    meuble: { type: Boolean },
    option: [String],
    surfaceHabitable: { type: String },
    surfaceTerrain: { type: String },
    nbrChambre: { type: Number, min: 0 },
    nbrSalleDeBain: { type: Number, min: 0 },
    nbrEtage: { type: Number, min: 0 },
    nbrPiece: { type: Number, min: 0 },
    dateConstruction: { type: Date },
})


module.exports = mongoose.model('annonce', AnnonceSchema)