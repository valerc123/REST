//montar el servidor
const express = require('express')
const app = express()
// interactuamos con el servidor 
app.get('/', (req, res)=>{ //recibo datos 
    res.send('recibido')
})
app.post('/', (req, res)=>{ //Envio datos
    res.send('Guardado...')
})
app.put('/', (req, res)=>{ //actulizo datos
    res.send('Actializando...')
})
app.delete('/', (req, res)=>{ //elimino datos
    res.send('Eliinando...')
})
app.listen(3000,() =>{
    console.log('server on pot 3000')
});