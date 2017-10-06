const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const myLogger = require('./my-logger');

const app = express();

// Serve static file in /public/assets folder
app.use('/resource', express.static(path.join(__dirname, 'public/assets')));

// Write log to log/access.log with 'append' mode
const logStream = fs.createWriteStream(path.join(__dirname, 'log/access.log'), {flag: 'a'});
app.use(morgan('combined', {stream: logStream}));

// Favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Custom logging
app.use(myLogger);

app.get('/', (req, res) => {
    res.send('Hello MWA');
})

app.listen(3002);