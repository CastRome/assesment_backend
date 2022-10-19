require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { connect } = require('./db');
const userRoute = require('./api/Users/Users.route');
const favsRoute = require('./api/Favs/Favs.route');
const listsRoute = require('./api/Lists/Lists.route');
const { deleteModel, get } = require('mongoose');

const app = express();
const port = process.env.PORT;
connect();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use('/user', userRoute);
app.use('/favs', favsRoute);
app.use('/lists', listsRoute);

app.listen(port, () => {
  console.log('Server Running Ok');
});
