const mongoose = require('mongoose');

const getTable = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Table', getTable);
