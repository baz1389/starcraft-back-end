'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.model('User', require('./User'));
mongoose.model('Guide', require('./guide'));

mongoose.connect(process.env.MONGOLAB_URI);

module.exports = mongoose;
