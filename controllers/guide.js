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


  create: function(req, res, next) {

    Guide.create({
      'playerRace': req.body.playerRace,
      'title': req.body.title,
      'matchup': req.body.matchup,
      'author': req.user.userName,
      'description': req.body.description
    }).then(function(guide) {
      res.json(guide);
    }).catch(function(error){
      next(error);
    });
  },


  update: function(req, res, next) {
    Guide.findOneAndUpdate({"_id": req.params.id}, {$set: {playerRace: req.body.playerRace, title : req.body.title, matchup : req.body.matchup, description: req.body.description}}, {new: true, "multi": true}).exec()
    .then(function(guide) {
      res.json(guide);
    }).catch(function(error) {
      next(error);
    });
  },


  destroy: function (req, res, next) {
    Guide.findByIdAndRemove(req.params.id).exec()
    .then(function() {
      res.sendStatus(200);
    })
    .catch(function(error){
      next(error);
    });
  }
};

module.exports = guideController;
