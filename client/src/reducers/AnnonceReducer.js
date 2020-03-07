import { ADD_ANNONCE, DELETE_ANNONCE, UPDATE_ANNONCE } from "../actions/types";
import { v4 as uuidv4 } from 'uuid';

const initialState = [
    {   id: uuidv4(),
        categorie: "appartement",
        typeAnnonce: "louer",
        posMap: {
            lat: "32.321646561",
            lng: "11.315611656"
        },
        disponibilite: "true",
        title: "appartement a louer",
        prix: "300",
        discription: "",
        galerie: "",
        option: ["chauffage", "clima", "vue mer"],
        surfaceHabitable: "320",
        surfaceTerrain: "750",
        nbrChambre: "3",
        nbrSalleDeBain: "2",
        nbrEtage: "2",
        nbrPiece: "7",
        meuble: "false"
    },
    {   id: uuidv4(),
        categorie: "terrain",
        typeAnnonce: "louer",
        posMap: {
            lat: "32.321646561",
            lng: "11.315611656"
        },
        disponibilite: "true",
        title: "terrain a louer",
        prix: "3000",
        discription: "",
        galerie: "",
        surfaceTerrain: "7500",
    }
]
const AnnonceReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export default AnnonceReducer 