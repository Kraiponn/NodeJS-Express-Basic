var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var router = require('./route/index_exports');

var app = express();
app.use('/api', router);
app.use(express.static(path.join(__dirname, '/public')));


app.set('view engine', 'ejs');
app.set('views', 'views');



app.get('/', (req, res) => {
    res.render('index', { title: 'Server side by NodeJS' });
});

app.get('/show', (req, res) => {
    res.render('show');
});

app.use(function(req, res, err) {
    res.sendFile(path.join(__dirname, './public/page_not_found.html'));
});

app.listen(3000, () => { console.log('Server is open on port 3000') });