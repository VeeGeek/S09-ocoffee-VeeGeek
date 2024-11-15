import dataMapper from "../datamapper.js";

const pageProduitController =  {
    pageProduit: async (req,res) => {
        try {
            const coffeeId = req.params.coffeeId;

            const coffee = await dataMapper.getOneCoffee(coffeeId);
            res.render ("detailproduit", { coffee }) 
        } 

        catch (error) {
            res.render("404")  
        }
    }
};

export default pageProduitController;