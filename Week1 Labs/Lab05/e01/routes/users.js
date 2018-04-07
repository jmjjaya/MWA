var express = require('express');
var router = express.Router();

const fetch = require("node-fetch");

/* GET users listing. */
router.get('/', function(req, res, next) {
  fetch('http://jsonplaceholder.typicode.com/users/')
  .then(response => response.json()) 
    .then(response => res.render('user.ejs', { userslist: response, header1: "Data with Promise" }));
});

module.exports = router;
