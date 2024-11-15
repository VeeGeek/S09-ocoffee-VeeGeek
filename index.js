import "dotenv/config";
import express from "express"
import router from "./app/routeurs/router.js";

//config du port
const PORT = process.env.PORT || 3000;

const app = express();

// Ajouter la configuration du moteur de modèles
app.set("views", "./app/views"); 
app.set("view engine", "ejs"); 

//Les routes 
app.use(router);

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static('integration'));


app.listen(process.env.PORT, () => {
    console.log(
      `Le serveur est mis en route sur le port ${process.env.PORT}`
    );
  });
