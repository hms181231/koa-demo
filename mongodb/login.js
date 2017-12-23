const mongoose = require('mongoose');

const Login = new mongoose.Schema({
  user: String,
  password: String
});

module.exports = mongoose.model('User', Login);
