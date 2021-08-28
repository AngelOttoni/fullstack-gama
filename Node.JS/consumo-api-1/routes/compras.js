var express = require('express');
var router = express.Router();
var cielo = require('../lib/cielo');

/* POST criacao de compra. */
router.post('/', function (req, res, next) {

    cielo.compra(req.body).then((result) => {
        const paymentId = result.Payment.PaymentId;
        cielo.captura(paymentId)
            .then((result) => {
                if (result.Status == 2) {
                    res.status(201).send({
                        "status": "Sucesso",
                        "Message": "Compra realizada com sucesso!",
                        "compra_id": paymentId
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
    cielo.consulta(req.params.compra_id)
    .then((result) => {
        // console.log(result);
        let message = {};

        switch(result.Payment.Status) {
            case 1:
                message = {
                    'Status': 'Pagamento autorizado!'
                };
                break;
            case 2:
                message = {
                    'Status': 'Pagamento realizado!'
                };
                break;
            case 12:
                message = {
                    'Status': 'Pagamento pendente!'
                };
                break;
            default:
                message = {
                    'Status': 'Pagamento recusado!'
                };
        }
        res.send(message)
    });
});

module.exports = router;