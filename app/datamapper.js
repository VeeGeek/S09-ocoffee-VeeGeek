import client from "./client.js";

const dataMapper = {

  getOneCoffee : async (coffeeId) =>{    

const sql = `SELECT * FROM coffee WHERE id = ${coffeeId};
`;
const result = await client.query(sql);
return result.rows[0];
},  

getThreeCoffees : async (coffeeName) =>{    

    const sql = `SELECT * FROM coffee LIMIT 3;`;
    const result = await client.query(sql);
    
        return result.rows;
    },  


getAllCoffees : async (coffeeName) =>{    

    const sql = `SELECT * FROM coffee;`;
    const result = await client.query(sql);
    return result.rows;
    }    
};

export default dataMapper; 