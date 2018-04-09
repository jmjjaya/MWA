var express = require('express');
var fs = require('fs');
var validator = require('express-validator');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('newsletter');
});

router.post('/', function (req, res, next) {
    req.checkBody('email', 'A valid email required').isEmpty();
    var errors = req.validationErrors();
    console.log(errors);
    if (errors) {
        res.render('error', {
            error: errors, message: 'Errors'
        });
    } else {
        fs.appendFile('C:/Users/jeewa/Documents/MUM/MWA/MWA/Week1 Labs/Lab06/e01/public/textfiles/subscriptions.txt', ', ' + req.body.email, function () {
            res.render('thankyou', {
                email: req.body.email
            });
        });
    }

});

module.exports = router;