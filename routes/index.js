var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("index,helloword,ITWORKS!321415141515");
});

module.exports = router;
