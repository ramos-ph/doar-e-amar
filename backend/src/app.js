require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env'
})

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const http = require('http')
const socketio = require('socket.io')

const authorization = require('./token')
const sessionRoutes = require('./routes/session.routes')
const registerRoutes = require('./routes/register.routes')
const firstAccessRoutes = require('./routes/firstAccess.routes')
const donationRoutes = require('./routes/donation.routes')
const offerRoutes = require('./routes/offer.routes')

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  err => {
    if (err) throw err

    console.log('Base de dados conectada com sucesso!')
  }
)

const app = express()
const server = http.Server(app)
const io = socketio(server)

const connectedUsers = {}

io.on('connection', socket => {
  const userId = socket.handshake.query

  connectedUsers[userId] = socket.id
})

app.use((req, res, next) => {
  req.io = io
  req.connectedUsers = connectedUsers

  return next()
})

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/public', express.static('public'))
app.use('/api/sessions', sessionRoutes)
app.use('/api/register', registerRoutes)
app.use('/api/first-access', authorization, firstAccessRoutes)
app.use('/api/donations', authorization, donationRoutes)
app.use('/api/offers', authorization, offerRoutes)

module.exports = server
