var express = require('express');
var router = express.Router();
var services = require('../services');

module.exports = function(app, model){

  app.get('/user/:id', (req, res, next) => {
  
    var cb = function(response){
      res.send(response);
    };

    services.users.findMySuperUser(req, res, model, cb);

  });
};
