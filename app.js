//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname +"/date.js");

//console.log(date());

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function (req, res) {
  /*

  var currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;

    default:
        console.log("Error !!");
      break;
  }
  /*

    if (currentDay === 6 || currentDay === 0)
    {
        day = "weekend";
       // res.sendFile(__dirname+"/weekend.html");
       // res.render("list",{kindOfDay:day});
       
    } else {
        day = "weekday";
       // res.sendFile(__dirname+"/weekday.html");
       //res.render("list",{kindOfDay:day});
    }

    */
   // let day = date.getDay();

    let day = date.getDate();
  res.render("list", { listTitle: day, NewlistItems: items });
});

app.post("/", function (req, res) {
  //let item = req.body.newItem;

      console.log(req.body);
      let item = req.body.newItem;

      //items.push(item);
      //res.redirect("/");


  if (req.body.list === "Work") {
    workItems.push(item);

    res.redirect("/work");
  } else {
    items.push(item);

    res.redirect("/");
  }
  
  // res.render("list",{NewlistItem : item});
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", NewlistItems: workItems });
});


app.post("/work", function (req, res) {
  //let item = req.body.newItem;
  //workItems.push(item);

  //res.redirect("/work");
});

app.get("/about",function(req,res){

    res.render("about");
});


app.listen(3000, function () {
  console.log("Server started on port 3000");
});
