const path = require('path');
const express = require('express');
var http = require('http');
var fs = require('fs');

const PORT = process.env.PORT || 8080;

const baseDir = path.dirname(__dirname);

const viewsFolder = path.join(baseDir,'Client', 'views');
const VmFolder = path.join(baseDir,'Client', 'ViewModel');
// const cssFolder = path.join(baseDir, 'css');
// const dataFolder = path.join(baseDir, 'data');

var server = express();

server.use(express.static(viewsFolder));
server.use(express.static(VmFolder));
// app.use(express.static(jsFolder));
// app.use(express.static(cssFolder));
// app.use(express.static(dataFolder));

server.get('/', function (req, res) {
     res.redirect('/Home');
})

server.get('/Home', function (req, res) {
    console.log("GET Home");
    res.sendFile(path.join(viewsFolder, 'main.html'));
})
server.get('/Data', function (req, res) {
    console.log("GET Data");
    res.sendFile(path.join(viewsFolder, 'data.html'));
})


server.listen(PORT, () => {
    console.log('Server listening on http://localhost:' + PORT);
})

server.get('/ShowData', function (req, res) {
    return res.redirect('/Data');
})


server.get('/EditData', function (req, res) {
    res.sendFile(path.join(viewsFolder, 'login.html'));
})

