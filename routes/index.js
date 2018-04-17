var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/skills', function(req, res, next) {
  res.render('testpage', {message: 'It worked!'});
});



module.exports = router;
