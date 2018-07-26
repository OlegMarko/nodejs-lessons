const express = require('express');


const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/test/:id', (req, res) => {
    res.render('test', {
        id: req.params.id
    });
});

app.listen(3000);
