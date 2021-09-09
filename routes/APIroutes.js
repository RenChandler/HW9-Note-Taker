
const fs = require("fs");
const notes = require("../db/db.json")



module.exports=function(app){

  app.post("/notes",  (req, res) => {
      fs.readFile("db/db.json", 'utf8', function (error, notes) {
        if (error) {
          return console.log(error, __dirname)      
        }
        notes = JSON.parse(notes)
    
        const id = notes[notes.length - 1].id + 1
        const newNote = { title: req.body.title, text: req.body.text }
        const activeNote = notes.concat(newNote)
  
  
    
        fs.writeFile("db/db.json", JSON.stringify(activeNote), function (error, data) {
          if (error) {
            return error
          }
          console.log(activeNote)
          res.json(activeNote);
        })
      })
    })
  
  app.get("/notes"), (req,res) => {
    console.log(notes)
    res.json(notes)
  }
  
  app.put("/notes/:id", function(req, res) {
      const noteId = JSON.parse(req.params.id)
      console.log(noteId)
      fs.readFile("db/db.json", "utf8", function(error, notes) {
        if (error ){
          return console.log(error)
        }
        notes.JSONparse(notes)
    
        notes = notes.filter(val => val.id !== noteId)
    
        fs.writeFile("db/db.json", JSON.stringify(notes), function (error, data) {
          if (error) {
            return error
          }
          res.json(notes)
        })
      })
    })
  

}  

