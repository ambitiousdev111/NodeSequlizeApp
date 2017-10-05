var express = require('express');
var router = express.Router();
var services = require('../services');

router.get('/:id', (req, res, next) => {

  var cb = function(response){
    res.send(response);
  };

  services.users.findMySuperUser(req, cb);

});

module.exports = router;