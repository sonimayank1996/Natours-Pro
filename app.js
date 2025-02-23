const express = require('express');

const app = express();

let port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Bhai')
});

app.post('/', (req, res) => {
    res.send('post request')
});

app.listen(port, () => {
    console.log(`server is started on port ${port}`)
})