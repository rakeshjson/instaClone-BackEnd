const express = require('express')
const connection = require('./connection/connection')
const userRoutes = require('./routes/user')
const cors = require('cors')
const port = 8080
connection()

const app = express()



app.use(cors())
app.use(userRoutes)

app.get("*", (req, res) => {
    res.status(404).send("API NOT FOUND");
})

app.listen(port ,()=> console.log("Listening on port " + port ))