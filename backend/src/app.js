const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const http = require('http');
const socketio = require('socket.io');

require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env',
});

const routes = require('./routes');
const routeNotFound = require('./middlewares/routeNotFound');
const errorHandler = require('./middlewares/errorHandler');

require('./database');

const app = express();
const server = http.Server(app);
const io = socketio(server);

const connectedUsers = {};

io.on('connection', (socket) => {
  const userId = socket.handshake.query;

  connectedUsers[userId] = socket.id;
});

app.use((req, _res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static('public'));
app.use('/api/doareamar/v1', routes);

app.use(routeNotFound);
app.use(errorHandler);

module.exports = server;
