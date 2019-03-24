const express = require('express');
const app = express();

const router = require('./routes/router.js');

const server = app.listen(3000, function() {
    console.log('listening on 3000');
});

app.use(express.static('public'));

app.use('/', router);
