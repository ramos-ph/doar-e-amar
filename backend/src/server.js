require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env'
})

// pacotes
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const http = require('http')
const socketio = require('socket.io')

// arquivos físicos
const authorization = require('./token')
const donationRoutes = require('./routes/donation.routes')
const sessionRoutes = require('./routes/session.routes')
const firstAccessRoutes = require('./routes/firstAccess.routes')

// inicializando o banco de dados
mongoose.connect(
  process.env.MONGO_URL,
  {
    // opções de conexão
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

// inicializando o servidor
const app = express()
const server = http.Server(app)
const io = socketio(server)

const connectedUsers = {}

// identificadores do socket.io
io.on('connection', socket => {
  const userId = socket.handshake.query

  connectedUsers[userId] = socket.id
})

// middlewares
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

// roteamento
app.use('/public', express.static('public'))
app.use('/api/donations', authorization, donationRoutes)
app.use('/api/first-access', authorization, firstAccessRoutes)
app.use('/api/sessions', sessionRoutes)

// inicializando o servidor HTTP
server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
})
