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

app.use((req, res, next) => {
    console.log('Hello middleware');
    next();   
})

// app.get('/api/v1/tours', getAllTour);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);
// app.post('/api/v1/tours', createTour);

app.route('/api/v1/tours').get(getAllTour).post(createTour);
app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour);

app.listen(port, () => {
    console.log(`server is started on port ${port}`)
})