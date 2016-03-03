var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Cat(){
  return knex('cats')
}

/* GET home page. */
router.get('/', function(req, res, next){
 Cat().select().then(function(result){
   res.json({cat:result})
 })
})


module.exports = router;
