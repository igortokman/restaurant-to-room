var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource 1st');
});

/*  */
router.get('/create', function(req, res, next) {
  var vm ={
    title: 'create an account'
  };
  res.render('users/create', vm);
});

module.exports = router;
