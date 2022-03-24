const express = require("express");
const Configdb = require('./Config/Configdb')
const PersonRouter = require('./Route/Person')
const app = express()
const port = 5000
require('dotenv').config()
Configdb()

app.use(express.json)
app.use('/api/Person',PersonRouter)








app.listen(process.env.port,console.log(`The server is running on the port ${process.env.port}`))