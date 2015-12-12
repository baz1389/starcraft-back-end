'use strict'

var express = require('express');
var router = express.Router();
var guideCtrl = require('../controllers/guide.js');

router.get('/', guideCtrl.index);
router.get('/:id', guideCtrl.read);

router.post('/', guideCtrl.create);

router.patch('/:id', guideCtrl.update);

router.delete('/:id', guideCtrl.destroy);

module.exports = router;
