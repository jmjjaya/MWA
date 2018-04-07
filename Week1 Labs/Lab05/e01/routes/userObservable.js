var express = require('express');
var router = express.Router();
const Rx = require('@reactivex/rxjs');

const fetch = require("node-fetch");

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = Rx.Observable.create(observer => {
    fetch('http://jsonplaceholder.typicode.com/users/')
      .then(response => response.json()) 
      .then(data => {
        observer.next(data);
        observer.complete();
      })
      .catch(err => observer.error(err));
  });
   data.subscribe(data => res.render('user.ejs', { userslist: data, header1: "Data with Reactive Programming" }));

});

module.exports = router;
