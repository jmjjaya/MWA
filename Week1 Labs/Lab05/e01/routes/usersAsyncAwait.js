var express = require('express');
var router = express.Router();

const fetch = require("node-fetch");

/* GET users listing. */
router.get('/', function(req, res, next) {
    getUsers(res);
});

async function getUsers(res){
    let response = await fetch('http://jsonplaceholder.typicode.com/users/');
    let responseJson = await response.json();
    res.render('user.ejs', { userslist: responseJson, header1: "Data with Async/Await " });
  }
module.exports = router;
