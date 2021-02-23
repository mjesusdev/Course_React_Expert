import '@testing-library/jest-dom';

import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de devolver un objeto', () => {
        const userTest = {
            uid: '123',
            username: 'Craftianos'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    })
    
    // getUserActivo debe devolver un objeto
    test('getUsuarioActivo debe devolver un objeto', () => {
        const name = 'Jesús';
        const user = getUsuarioActivo(name);
    
        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        });
    })
    
})
