const express = require('express')
const app = express()
const cors = require('cors')

const port = 3333 || process.env.PORT

const route = require('./routes')

app.use(cors())
app.use(express.json())
app.use(route)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))