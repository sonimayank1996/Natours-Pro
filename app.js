const express = require('express');
const fs = require('fs');

const app = express();

let port = 3000;

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

app.use(express.json());

const getAllTour = (req, res) => {
    console.log('Hii');
    
    res.status(200).json({
        status: 200,
        tours
    })
}

const getTour = (req, res) => {
    const tour = tours.find((ele) => ele.id == req.params.id);
    res.status(200).json({
        status: 200,
        tour
    })
}

const createTour = (req, res) => {
    res.send('post request')
}

const updateTour =  (req, res) => {
    res.status(200).json({
        status: 200,
        data: {
            tour: 'Updated Tour'
        }
    })
}

const deleteTour = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    })
}

const getAllUser = (req, res) => {
    res.status(500).json({
        status: 'failed'
    })
}
const getUser = (req, res) => {}
const createUser = (req, res) => {}
const updateUser = (req, res) => {}
const deleteUser = (req, res) => {}

app.use((req, res, next) => {
    console.log('Hello middleware');
    next();   
})

app.route('/api/v1/tours').get(getAllTour).post(createTour);
app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour);

app.route('/api/v1/users').get(getAllUser).post(createUser);
app.route('/api/v1/users/:id').get(getUser).patch(updateUser).delete(deleteUser);

app.listen(port, () => {
    console.log(`server is started on port ${port}`)
})