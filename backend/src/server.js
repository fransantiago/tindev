require('dotenv').config();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const server = express();

const routes = require('./routes');

const databaseConnectionURL = `${process.env.DB_URL}:${process.env.PORT}/${process.env.DB_DATABASE}`;
const databaseOptions = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(databaseConnectionURL, databaseOptions);

server.use(cors());
server.use(bodyParser.json());
server.use(routes);

server.listen(3333);