import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe de devolver Hola Jesús', () => {
        
        const nombre = 'Jesús';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola Jesús');        
    })

    test('getSaludo debe de devolver Hola Carlos!', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos!');        
    })
    
})
