import dataMapper from "../datamapper.js"

const cataloguecontroller =  {
    cataloguePage : async (req,res) => {
        try {
        const coffees = await dataMapper.getAllCoffees();

        res.render ("catalogue", { coffees })
        } 
        catch (error) {
            res.render("404")  
        }
    }
};

export default cataloguecontroller;