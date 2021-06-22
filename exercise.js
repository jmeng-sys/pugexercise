// this exercise.js does not communicate with any database

const express = require("express");
const app = express();
const path = require("path");

var myTitle = "Welcome to Jin's pug file";
var myName = "Jin";
var myDate = new Date().toDateString();

app.use(express.static("media", { "extensions": ["png", "jpg", "gif"]}));

app.set("views", path.join(__dirname, "views"));

app.set ("view engine", "pug");

app.listen(8000, ()=>{ console.log("Server started on port 8000");});

app.use(express.urlencoded( { extended: true }));

// add a current date
app.get("/index", (req, res)=>{
    res.render("index", {title: myTitle, name: myName, date: "on " + myDate, greetings: ["Morning", "Pug Rocks"]});
});


app.get("/register", (req,res)=>{
    res.render("register", {name: myName});
});

app.get("/contact", (req,res)=>{
    res.render("contact", {name: myName});
});

app.get("/about", (req,res)=>{
    res.render("about");
});

app.get("/thankyou", (req,res)=>{
    res.render("thankyou");
});

app.use((req, res, next)=>{
	res.status(404).render("404");
});


