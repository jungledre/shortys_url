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
    res.render("links/index")
});

app.post("/create", function(req,res) {
    db.URL.create(req.body)
    .done(function(err, data) {
    var result = hashids.encode(data.id);
    data.suffix = result;
    data.save().done(function(err, data) {
        res.render("links/create", {data:data});
    });
    });
});

app.get("/:suffix", function(req,res){
    db.URL.find({ where: { suffix: req.params.suffix } }).done(function(error, data){
    res.redirect("http://" + data.prefix)
})
})


app.listen(process.env.PORT || 3000);
