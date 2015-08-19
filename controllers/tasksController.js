var task = require("../models/task")

module.exports = {
  index: function(req,res){
    var tasks = res.json(task.all())
  },
  show: function(req, res){
    res.json(task.find(req.params.id))
  },
  create: function(req,res){
    var newTask = task.create(req.body)
    res.json(newTask)
  },
  // update: function(req, res){
  //
  // },
  delete: function(req, res){
    task.delete(req.params.id)
    res.json("")
  }
}
