const express= require('express')
const router = express.Router();
const controllers = require('../controllers/products')

router.route('/')
.get( controllers.getProducts )
.post( controllers.addProducts )

//Actualizar los datos
router.route('/:id')//recibe id de products e.g. localhost:3000/products/id? (acá iría id)
.put( controllers.updateProducts )
.delete( controllers.deleteProducts )

module.exports = router; 