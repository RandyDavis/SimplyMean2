/**
 * Created by randy on 7/10/16.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000);