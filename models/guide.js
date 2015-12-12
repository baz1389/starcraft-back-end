'use strict'

var mongoose = require('mongoose');
var moment = require('moment');

var guideSchema = new mongoose.Schema({
  playerRace: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  matchup: {
    type: String,
    required: true
  },
  author: {
    type: String,
  },
  description: {
    type: String,
    required: true
  },
  date: {type: String, default: moment().format("MMM Do YY")}

});

var Guide = mongoose.model('Guide', guideSchema);

module.exports = Guide;
