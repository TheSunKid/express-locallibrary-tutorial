var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('demo', { title: 'Express' });
});
router.get('/demo', function(req, res, next) {
  res.send('GaugauAnagnag');
});
module.exports = router;
