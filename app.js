const express = require('express');
const fs = require('fs');

const app = express();

let port = 3000;

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

app.use(express.json());


app.get('/api/v1/tours', (req, res) => {
    console.log('tours', tours)
    res.status(200).json({
        status: 200,
        tours
    })
});

app.get('/api/v1/tours/:id', (req, res) => {
    console.log('tours', req.params.id)
    const tour = tours.find((ele) => ele.id == req.params.id);
    res.status(200).json({
        status: 200,
        tour
    })
});

app.patch('/api/v1/tours/:id', (req, res) => {
    res.status(200).json({
        status: 200,
        data: {
            tour: 'Updated Tour'
        }
    })
});

app.delete('/api/v1/tours/:id', (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    })
});

app.post('/api/v1/tours', (req, res) => {
    console.log(req.body);
    res.send('post request')
});

app.listen(port, () => {
    console.log(`server is started on port ${port}`)
})