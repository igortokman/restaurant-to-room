var express = require('express');
var router = express.Router();
var userService = require('../services/user-service');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource 1st');
});


router.get('/create', function(req, res, next) {
  var vm = {
    title: 'create an account'
  };

  res.render('users/create', vm);
});

router.post('/create', function(req, res, next) {
userService.addUser(req.body, function(err) {
    if (err) {
      var vm = {
        title: 'Create an account',
        input: req.body,
        error: 'Something went wrong'
      };
      delete vm.input.password;
      return res.render('users/create', vm);
    }
    res.redirect('/orders');
  });
});

module.exports = router;
