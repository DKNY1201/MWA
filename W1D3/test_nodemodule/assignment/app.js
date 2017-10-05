const express = require('express');
const path = require('path');
const app = express();
const fetch = require('node-fetch');

app.set('port', process.env.PORT || 3000);
app.set('env', process.env.name || 'development');
app.set('views', path.join(__dirname, 'templates'));
app.set('view cache', true);
app.set('view engine', 'ejs');

app.enable('case sensitive routing');
app.enable('strict routing', true);
app.enable('trust-proxy');
app.disable('x-powered-by');

const port = app.get('port');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', (req, res) => {
    // fetch('http://jsonplaceholder.typicode.com/users/')
    //     .then(data => data.json())
    //     .then(json => {
    //         res.render('users', {users: json});
    //     });

    (async () => {
        const data = await fetch('http://jsonplaceholder.typicode.com/users/');
        const users = await data.json();
        res.render('users', {users: users});
    })();
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})