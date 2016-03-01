var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Pirate(){
  return knex('pirates');
}

/* GET home page. */
router.get('/api/pirates', function(req, res, next) {
  Pirate().select().then(function(result){
    res.json(200, {pirates:result})
  })

});

module.exports = router;
