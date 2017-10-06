const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const path = require('path');
const cookie = require('cookie-parser');

// app.use('/user/:id', (req, res, next) => {
//     console.log(`Time from app level: ${new Date()}`);
//     next();
// }, (req, res, next) => {
//     console.log(`request url: ${req.url}`);
//     console.log(`request type: ${req.method}`);
// })

// router.use((req, res, next) => {
//     console.log(`Time from router level: ${new Date()}`);
//     next();
// })

const myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
}
app.use(myLogger);
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public','/favicon.ico')));
app.use(cookie());


app.get('/', (req, res) => {
    res.send('Hello world');
})

app.get('/users/:userid/books/:bookid', (req, res) => {
    console.log(req.query);
    res.send(req.params);
})


app.listen(3001);