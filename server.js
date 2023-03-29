const bodyParser = require('body-parser');
const core = require('cors')
const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 3000;

const userroute = require('./routers/user.route');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/Doctor', userroute)


app.listen(port, hostname, () => {
    console.log(`Running At http://${hostname}:${port}/`);
})


