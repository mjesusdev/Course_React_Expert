import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    
    test('should return heroe async ', () => {
        
        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {

                expect( heroe ).toBe( heroes[0] );
                done();
            }) 
    })

    test('should get an error if the heroe by id no exists', () => {
        const id = 10;

        getHeroeByIdAsync( id )
            .catch( error => {
                expect( error ).toBe('No se puede encontrar el héroe!!');
                /* done(); */
            })
    })
    
    
})
