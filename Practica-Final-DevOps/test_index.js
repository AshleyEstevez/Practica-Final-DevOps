const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('./index.html', 'utf-8');

describe('Prueba de la página index.html', function () {
    it('Debe contener el título Hola Mundo', function () {
        assert(html.includes('<h1>Hola Mundo</h1>'), 'No se encontró el título esperado');
    });
});
