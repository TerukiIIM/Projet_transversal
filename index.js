const express = require("express")
const cors = require("cors")

const ip = require("ip")
const bodyParser = require("body-parser")

const prisma = require("./config/prisma")

const app = express()
const port = 3000
const ipAddress = ip.address()


app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/", require("./routes/start"))

app.get("/scores", (req, res) => {
    prisma.score.findMany({}).then((e) => { 
        res.json({ message : e.score })
    })
    .catch((e) => res.json({ message : e }))
})

const initApp = () => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
        console.log(`http://${ipAddress}:${port}`)
    })
}

initApp()