const express = require('express');
const app = express();

app.get('/', function(req, res){
    if(req.query.nombre){
    res.send('<h1>hola '+req.query.nombre+'!</h1>');
    }else{res.send('<h1>hola desconocido!</h1>');}
});

app.listen(3000, () => console.log('Listening on port 3000!'));