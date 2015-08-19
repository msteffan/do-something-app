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
    body: "get a job, hippie",
    completed: false},
]

module.exports = {
    all: function(){
        return tasks
    },
    find: function(){
        for(var i = 0; i < tasks.length; i++){
          if(tasks[i].id == id){
            return tasks[i]
          }
        }
    },
    create: function(){
        tasks.push(body)
        return body
    },
    delete: function(){
        for(var i = 0; i < tasks.length; i++){
          if(tasks[i].id == id){
            tasks = tasks.splice(i,1)
            return
          }
        }
    }
}
