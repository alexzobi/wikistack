var express = require("express");
var app = express();
var nunjucks = require("nunjucks");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var routes = require("./routes");
var models = require('./models');


app.set("view engine", "html");
app.engine("html", nunjucks.render);
nunjucks.configure("views", {noCache : true});

models.db.sync({force: true})
.then(function (){
    console.log('All tables created!');
    app.listen(3000, () => console.log("server listering")); 
})
.catch(console.error.bind(console));

app.use(morgan("div"));

app.use("/", routes);

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded( {extended:true}));
app.use(bodyParser.json());