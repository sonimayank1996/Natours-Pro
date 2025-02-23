const express = require('express');

const app = express();

let port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Bhai')
});

app.listen(port, () => {
    console.log(`server is started on port ${port}`)
})