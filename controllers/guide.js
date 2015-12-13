
var mongoose = require("../models/index");
var passport = require('passport');

var Guide = require('../models').model('Guide');
var User = require('../models').model('User');

var guideController = {
  // readAll: ,
  // readOne: ,
  create: function(req, res, next){
    Guide.create({
      'playerRace': req.body.playerRace,
      'title': req.body.title,
      'matchup': req.body.matchup,
      // 'author': req.user.id,
      'description': req.body.description
    }).then(function(guide) {
      res.json(guide);
    }).catch(function(error){
      next(error);
    });
  } //,
  // update: ,
  // destroy:
}

module.exports = guideController;
