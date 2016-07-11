/**
 * Created by randy on 7/10/16.
 */
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(3000);