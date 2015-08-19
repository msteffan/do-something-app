var express = require("express")
var app = express()
var bodyParser = require("body-parser")
app.set("view engine", "hbs")
app.use(bodyParser.json()) //handles json post requests with AJAX
app.use(bodyParser.urlencoded({ extended: true })) // allows form submissions

var tasksController = require("./controllers/tasksController");
var path = require("path");

app.use("/app", express.static(path.join(__dirname + "/app")));
app.get("/", function(request, response){
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/tasks", tasksController.index)
app.get("/tasks/:id", tasksController.show)
app.post("/tasks", tasksController.create)
// app.put("/tasks/:id", tasksController.update)
app.delete("/tasks/:id", tasksController.delete)




app.listen(4000, function(){
    console.log("app is listening on port 4000");
})
