var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models/index.js");

var Hashids = require("hashids"),
    hashids = new Hashids("this is my salt");

var newHash = hashids.encode(12345);

var app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:false}));

app.get("/", function(req,res){
    res.render("index")
});

app.post("/create", function(req,res) {
    db.URL.create({"prefix": req.body.prefix})
    .done(function(err, data) {
    var result = hashids.encode(data.id);
    data.suffix = result;
    data.save().done(function(err, data2) {
        console.log(data2)
        res.render("./create", data2);
    });
    });
});

app.listen(3000, function() {
    console.log("Death Race 3000!");
});
