const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

app.use('/resource', express.static(path.join(__dirname, 'public/assets')));

const logStream = fs.createReadStream(path.join(__dirname, 'log/access.log'));
app.use(morgan('combined', {stream: logStream}));

app.get('/', (req, res) => {
    res.send('Hello guys');
})

app.listen(3002);