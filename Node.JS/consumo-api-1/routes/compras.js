var express = require('express');
var router = express.Router();

/* POST criacao de compra. */
router.post('/', function (req, res, next) {
    res.send('Rodando...');
});

/* GET criacao de compra. */
router.get('/:compra_id/status', function (req, res, next) {
    res.send('Rodando status...');
});

module.exports = router;