const fetch = require('node-fetch');

class Cielo {
    static compra(params) {

        return fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/', {
            method: 'post',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json',
                'MerchantId': '8c8f7ddd-234d-4ba0-aa8e-6f20a94ac785',
                'MerchantKey': 'KIKDGXVXXSSFNTWXLHWHPHMWSCTGCIXNUARLMOMU',
            },
        })
            .then(res => res.json());

    }

    static captura(PaymentId) {

        return fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/' + PaymentId + '/capture', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'MerchantId': '8c8f7ddd-234d-4ba0-aa8e-6f20a94ac785',
                'MerchantKey': 'KIKDGXVXXSSFNTWXLHWHPHMWSCTGCIXNUARLMOMU',
            },
        })
            .then(res => res.json());

    }

    static consulta(PaymentId) {

        return fetch('https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/' + PaymentId, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'MerchantId': '8c8f7ddd-234d-4ba0-aa8e-6f20a94ac785',
                'MerchantKey': 'KIKDGXVXXSSFNTWXLHWHPHMWSCTGCIXNUARLMOMU',
            },
        })
            .then(res => res.json());

    }

}

module.exports = Cielo;