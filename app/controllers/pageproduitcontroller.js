import dataMapper from "../datamapper.js";

const pageProduitController =  {
    pageProduit: async (req,res) => {
        try {
        const coffeeName = req.params.coffeeName;

        const coffee = await dataMapper.getOneCoffee(coffeeName);

        res.render ("detailproduit", { coffee })
        } 
        catch (error) {
            res.render("404")  
        }
    }
};

export default pageProduitController;