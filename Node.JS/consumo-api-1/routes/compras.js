var express = require('express');
var router = express.Router();
var cielo = require('../lib/cielo');

/* POST criacao de compra. */
router.post('/', function (req, res, next) {
    res.send(cielo.compra(req.body));
});

/* GET criacao de compra. */
router.get('/:compra_id/status', function (req, res, next) {
    res.send('Rodando status...');
});

module.exports = router;