const mysql = require("mysql")
const express = require("express")
const cors = require("cors")
const port = 80
const uri = `http://localhost:${port}`

const app = express()
app.use(express.json())
app.use(cors())

var con = mysql.createConnection({
    host: "localhost",
    user: "myuser",
    password: "1234",
    database: "blog"
})

con.connect( (err) => {
    if (err) throw err
    console.log("Connected to MySQL")
})

// inregistreaza rutele
app.post("/user", (req, res) => {
  con.query(
      'INSERT INTO users VALUES(NULL, ?, ?, sha1(?))',
      [ req.body.email, req.body.name, req.body.password ]
  )
  res.sendStatus(200)
})
app.get("/user/login", (req, res) => {
  
})
app.post("/posts", (req, res) => {
  
})
app.get("/posts/{id}", (req, res) => {
  
})
app.get("/posts", (req, res) => {
  
})



// porneste aplicatia server
app.listen(
    port, () => console.log(`Server started on ${uri}`)
)