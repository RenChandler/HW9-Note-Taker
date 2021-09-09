const express = require ("express")
const HTMLroutes = require("./routes/HTMLroutes")
const APIroutes = require("./routes/APIroutes")

const app = express()
const PORT = 3001


app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))

app.use("/", HTMLroutes)

app.use("/api", APIroutes)


app.listen(PORT, () => console.log(`listening on port: ${PORT}`))

console.log(__dirname)

