const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const route = require('./routes')

const port = 3333 || process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://ryan:ryan1234@cluster0-mxewm.mongodb.net/iWork?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify:false
})

app.use(route)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))