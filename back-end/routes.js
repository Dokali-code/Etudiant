const express = require ('express');
const router = express.Router();
router.get('/', (req,res) => {
    res.send ("Page d'accueil");
});

router.get('/gestion', (req,res) => {
    res.send ("Gestion etudiants");
});

router.get('/liste', (req,res) => {
    res.send ("Liste des etudiants");
});

router.get('/propos', (req,res) => {
    res.send ("A propos");
});

router.get('/etudiantJSON', (req,res) => {
    const etudiants = [
        {etudianttID:1, Nom_etudiant:'Mohamed', Moyenne_etudiant:'13,5'},
        {etudianttID:2, Nom_etudiant:'Ali', Moyenne_etudiant:'11,25'},
        {etudianttID:3, Nom_etudiant:'Salah', Moyenne_etudiant:'12,75'}

    ]
    res.statusCode(200).json (etudiants);
});

module.exports=router;