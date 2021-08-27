const fetch = require('node-fetch');

class Cielo {
    static compra(params) {

        fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/', {
            method: 'post',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json',
                'MerchantId': '8c8f7ddd-234d-4ba0-aa8e-6f20a94ac785',
                'MerchantKey': 'KIKDGXVXXSSFNTWXLHWHPHMWSCTGCIXNUARLMOMU',
            },
        })
            .then(res => res.json())
            .then(json => console.log(json));

    }
}

module.exports = Cielo;