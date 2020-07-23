
const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const { route } = require('../../../api_rest_node/src/routes/movies');

router.get('/', (req, res) =>{
    res.send('Index page...');
});

router.get('/:numeroInicial/:numeroFinal', (req, res) =>{
    const min = parseInt(req.params.numeroInicial);
    const max = parseInt(req.params.numeroFinal);

    // valido que los parametros sean numeros
    if(isNaN(min) || isNaN(max)){
        res.status(404);
        res.json({"error": "Petición incorrecta..."});
        return;
    }
    
    // genero un numero aleatorio
    const numAleatorio = Math.floor(Math.random() * (max - min) + min);
    res.json({"número random": numAleatorio}); // devuelvo un json con el resultado
});

module.exports = router;