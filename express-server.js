const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send('ExpressJS');
});

app.get('/test/:id', (req, res) => {
    res.send(req.params.id);
});

app.listen(3000);
