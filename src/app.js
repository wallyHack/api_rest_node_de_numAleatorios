
const express = require('express');
const morgan = require('morgan');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set("json spaces", 2);

// middlewares
app.use(morgan('dev'));
app.use(express.json()); //el server puede usar formatos json
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/random/', require('./routes/aleatorios'));

// starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});

app.get('/', (req, res) =>{
    res.send('Index page...');
});