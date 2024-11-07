const mongoose = require('mongoose');

const mongoDB = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
