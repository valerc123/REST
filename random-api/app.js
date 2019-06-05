const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('index page')
    
});

//rutas e.g: localhost:3000/random/10/80 
app.get('/random/:numeroInicial/:numeroFinal', (req, res) => {
        const min = parseInt(req.params.numeroInicial); //typeof devuelve string
        const max = parseInt(req.params.numeroFinal);

        //validamos
        if(isNaN(min) || isNaN(max))
        {
             res.status(404);
             //personalizamos el mensaje de error
             res.json({'error': 'Bad request'});
             return
        }
        
        const result = Math.floor(Math.random() * (max-min) + min)
        // res.send('Recivido')
        
        //respondemos con json
        res.json({"randomNumber": result}); //json del resultado 
});
    
app.listen(3000, () => {
    console.log('server on port 3000');

})