const express = require('express');
const logger = require('morgan');
require('dotenv').config({ path: `${__dirname}/../.env` });
const employeeRouter = require('./routes/employee');
const cors = require('cors')
require('./db/db');

const app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req,res) => {
  res.send('hello world')
});
app.use('/employee', employeeRouter);

module.exports = app;