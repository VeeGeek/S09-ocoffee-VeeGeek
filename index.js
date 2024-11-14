import "dotenv/config";
import express from "express"
import homerouter from "./app/routeurs/homepagerouteur.js";

// un peu de config
const PORT = process.env.PORT || 3000;

const app = express();

// Ajouter la configuration du moteur de modèles
app.set("views", "./app/views"); 
app.set("view engine", "ejs"); 

//Les routes 
app.use(homerouter);

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static("integration"));
