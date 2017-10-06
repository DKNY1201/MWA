const express = require('express');
const books = require('./routes/books');
const cds = require('./routes/cds');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/books', books);
app.use('/api/cds', cds);

app.listen(3003);