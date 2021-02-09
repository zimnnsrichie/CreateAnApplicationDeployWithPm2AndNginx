const express = require('express');
const app = express();
const port = 6500;
const fs = require('fs');

app.listen(port, (err, data) => {
    if(err) throw err;

    console.log("server listening on port:", port)
});

app.get('/data', (req, res) => {
    fs.readFile('./data.json', (err, data) => {
        if (err){
            res.status(400).send(err.toString());
        } else{
            res.status(200).send(JSON.parse(data));
        }
    });
});

app.get('/', (req, res) => {
    fs.readFile('./index.html', (err, data) => {
        if (err){
            res.status(400).send(err.toString());
        } else{
            res.status(200).send(data.toString());
        }
    });
});

app.get('/*', (req, res) => {
    res.status(200).send("<header>Invalid Get Request: </header>" + req.url);
});

