import express from "express"
import bodyParser from "body-parser"
import initWebRoutes from "./routes/web"
const path = require('path')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/Images', express.static(path.join(__dirname, 'Images')))

initWebRoutes(app)

let port = process.env.PORT || 6969
app.listen(port, () => {
    console.log("Server listening on port: " + port)
})