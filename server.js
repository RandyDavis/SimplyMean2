/**
 * Created by randy on 7/10/16.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
// var db = mongojs("mongodb://simplymean2user:testing123@ds011870.mlab.com:11870/simplymean2", ["serviceClients"]);
var db = mongojs("cs5610353", ["serviceClients"]);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get("/serviceClients", function (req, res) {
    db.serviceClients.find(function (err, docs) {
        res.json(docs);
    });
});

app.post("/serviceClients", function (req, res) {
    var svc = req.body;
    console.log(svc);

    db.serviceClients.insert(svc, function (err, doc) {
        res.json(doc);
    });
});

app.delete("/serviceClients/:id", function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.serviceClients.remove({_id: mongojs.ObjectId(id)},
        function (err, doc) {
            res.json(doc);
        });
});
app.listen(3000);