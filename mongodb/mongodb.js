const mongoose = require('mongoose');
const config = require('../config/config.js');
const db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(config.mongo.url, {
  useMongoClient: true
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('oK');
});
