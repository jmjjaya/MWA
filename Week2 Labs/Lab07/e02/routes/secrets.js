var express = require('express');
var router = express.Router();
var crypto = require('crypto');

/* GET home page. */
router.get('/', function (req, res, next) {
    var MongoClient = require('mongodb').MongoClient;

    MongoClient.connect('mongodb://localhost:27017', function (err, client) {
        if (err) throw err;
        const db = client.db('homework7');
        db.collection('e2').findOne({}, function (err, result) {
            if (err) throw err;
            console.log(result.mess);
            var decipher = crypto.createDecipher('aes256', 'asaadsaad')
            var dec = decipher.update(result.message, 'hex', 'utf8')
            dec += decipher.final('utf8');
            res.render('secrets', {
                encrypted: result.message,
                decrypted: dec
            });
        });
    });

});

module.exports = router;