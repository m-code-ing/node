const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcom to home page')
})

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log('Server listening on 3000!');
})