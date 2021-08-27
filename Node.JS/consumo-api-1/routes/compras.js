var express = require('express');
var router = express.Router();
var cielo = require('../lib/cielo');

/* POST criacao de compra. */
router.post('/', function (req, res, next) {

    cielo.compra(req.body).then((result) => {
        cielo.captura(result.Payment.PaymentId)
            .then((result) => {
                if (result.Status == 2) {
                    res.status(201).send({
                        "status": "Sucesso",
                        "Message": "Compra realizada com sucesso!"
                    });
                }
                else {
                    res.status(402).send({
                        "status": "Falha",
                        "Message": "Compra não realizada!"
                    });
                }
            })
            .catch((err) => {
                console.error(err);
            })
    });

});

/* GET criacao de compra. */
router.get('/:compra_id/status', function (req, res, next) {
    res.send('Rodando status...');
});

module.exports = router;