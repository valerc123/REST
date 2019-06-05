const { products } = require('../db.json')

module.exports = {

    //listar los datos
   getProducts: ( req, res ) => { 
        res.json({ products }); // los muestra en pantalla 
    },

    //Agregar un producto
    addProducts: ( req, res ) => { //recibe los datos y los agrega a la bd  
        const { name } = req.body;
    
        products.push({ //se agregan los datos a la bd
            name,
            id: products.length
        });
        res.json({
            'success': true,
            'msg': 'Successfully added'
        });
    },

    //Actualizar un producto
    updateProducts: (req, res) => {
        //obtengo el id
        const { id } = req.params;
        const { name } = req.body;
        
        products.forEach((product, i) => {
            if(product.id === Number(id))
            {
                product.name = name
            }
        });

        res.json({
            'success': true,
            'msg': 'Successfully updated'
        })
    },

     //Eliminar un producto
    deleteProducts: (req, res) => {

        const { id } = req.params;
        products.forEach((product, i) =>{
            if(product.id == Number(id))
            {
                products.splice(i,1) // quita el inidice i y cuantos elimina 1
            }
            
        });

        res.json({
            'success': true,
            'msg': 'Successfully deleted'
        });
    }

};