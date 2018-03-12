const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes");
const models = require('./models');


app.set("view engine", "html");
app.engine("html", nunjucks.render);
nunjucks.configure("views", {noCache : true});

app.use(bodyParser.urlencoded( {extended:true}));
app.use(bodyParser.json());

models.db.sync({force: true})
.then(function (){
    console.log('All tables created!');
    app.listen(3000, () => console.log("server listering")); 
})
.catch(console.error.bind(console));

app.use(morgan("dev"));

app.use("/", routes);

//app.use(express.static(__dirname + "/public"));

