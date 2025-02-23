const express = require('express');
const fs = require('fs');
const { console } = require('inspector');

const app = express();

let port = 3000;

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));


app.get('/api/v1/tours', (req, res) => {
    console.log('tours', tours)
    res.status(200).json({
        status: 200,
        tours
    })
});

app.post('/', (req, res) => {
    res.send('post request')
});

app.listen(port, () => {
    console.log(`server is started on port ${port}`)
})