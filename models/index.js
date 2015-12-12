'use strict';

var mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.model('User', require('./User'));
mongoose.model('Guide', require('./guide'));

mongoose.connect("mongodb://localhost/guide");

module.exports = mongoose;
