import dataMapper from "../datamapper.js"

const homecontroller = {
    //Methode pour afficher la homepage
    homePage : async (req,res) => {
        try {
            const coffees = await dataMapper.getThreeCoffees();
    
            res.render("homepage", { coffees });
        } 
        catch (error) {
            res.render("404")  
        }
        
    }
};

export default homecontroller; 