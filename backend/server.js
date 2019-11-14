const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// REQUIRE ROUTES
const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// MIDDLEWARE
app.use(cors())
app.use(express.json())

// SET ROUTES
app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

// CONNECT TO MONGODB
const uri = process.env.CONN_STRING
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })

const connection = mongoose.connection
connection.once('open', () => console.log('MongoDB database connected successfully'))

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))