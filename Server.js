var http = require('http');
var fs = require('fs');

const path = require('path');
const express = require('express');
const port = process.env.PORT || 8080;

const baseDir = path.dirname(__filename);

var app = express();

app.listen(port,()=>{
    console.log(`server listen of port ${port}`);
});

app.get('/', function (req, res) {
    console.log(baseDir);
    res.sendFile(path.join(baseDir,"index.html"));
})