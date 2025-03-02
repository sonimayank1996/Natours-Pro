const app = require('./app');

let port = 3000;

app.listen(port, () => {
    console.log(`server is started on port ${port}`)
})