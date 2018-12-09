const express = require('express');
const app = express();

app.get('/makers/:name', function(req, res){
    if(req.params){
    res.send('<h1>Hola '+req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1)+'!</h1>');
    }else{res.send('<h1>hola desconocido!</h1>');}
});

app.listen(3000, () => console.log('Listening on port 3000!'));