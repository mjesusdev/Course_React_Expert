import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Héroes', () => {
    
    test('should return heroe by id', () => {
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( heroe => heroe.id === id );

        expect( heroe ).toEqual( heroeData );
    });

    test('should return undefined by id not exists', () => {    
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
    });
    
    // should return array with the heroes of DC
    test('should return array with the heroes of DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        const heroesData = heroes.filter( h => h.owner === owner );

        expect( heroes ).toEqual( heroesData );
    })
    
    // toEqual 
    test('should return array with the heroes of Marvel', () => {
        const owner  = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );
    })
    
    // length = 2 // toBe
})