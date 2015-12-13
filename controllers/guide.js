
var util = require('util');
var mongoose = require("../models/index");
var passport = require('passport');

var Guide = require('../models').model('Guide');
var User = require('../models').model('User');

var guideController = {
  readAll: function(req, res, next) {
    Guide.find().exec().then(function(guides) {
      res.json(guides);
    }).catch(function(error) {
      next(error);
    });
  },


  readOne: function (req, res, next) {
    console.log("guide read params id is = ", req.params.id);

    Guide.find({"_id": req.params.id}).exec()
    .then(function(guide){
      res.json(guide);
    }).catch(function(error){
      next(error);
    });
  },


  create: function(req, res, next){
    console.log("here are the create params " + util.inspect(req.body));
    console.log('req.user is ' + req.user);

    Guide.create({
      'playerRace': req.body.playerRace,
      'title': req.body.title,
      'matchup': req.body.matchup,
      'author': "Ben", //req.user.id
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
