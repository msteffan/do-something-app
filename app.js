var express = require("express")
var app = express()
var bodyParser = require("body-parser")
app.use(bodyParser.json()) //handles json post requests with AJAX
app.use(bodyParser.urlencoded({ extended: true })) // allows form submissions

var tasks = [
    {id: 1,
    body: "learn Rails",
    completed: true},
    {id: 2,
    body: "learn Backbone",
    completed: false},
    {id: 3,
    body: "learn Angular",
    completed: false},
    {id: 4,
    body: "eat lunch",
    completed: true},
    {id: 5,
    body: "get a job",
    completed: false},
]

app.get("/tasks", function(req, res){
  res.json(tasks)
})

// app.get("/tasks/:id", function(req, res){
//     var id = req - 1
//     res.json(tasks[id])
// })


// from solution
app.get("/tasks/:id", function(req, res){
  for(var i = 0; i < tasks.length; i++){
    if(tasks[i].id == req.params.id){
      res.json(tasks[i])
    }
  }
})

app.post("/tasks", function(req,res){
  tasks.push(req.body)
  res.json(req.body)
})


app.listen(4000, function(){
    console.log("app is listening on port 4000");
})
