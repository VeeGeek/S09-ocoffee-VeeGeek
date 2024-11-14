import dataMapper from "../datamapper.js"

const homecontroller = {
    //Methode pour afficher la homepage
    homePage : async (req,res) => {
        res.render("homepage")
    }
};

export default homecontroller;