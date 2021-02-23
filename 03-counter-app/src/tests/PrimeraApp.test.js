import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
  
/*     test('should show message Hola soy Goku', () => {
        const saludo = 'Hola, soy Goku';

        const { getByText } = render( <PrimeraApp saludo = { saludo }/> );

        expect( getByText(saludo) ).toBeInTheDocument();
    }) */

    test('should shows <PrimeraApp />', () => {
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow( <PrimeraApp saludo = { saludo } /> )

        expect( wrapper ).toMatchSnapshot()
    });

/*     test('should shows subtitle send for props', () => {
        const saludo = 'Hola, Soy Goku';
        const subtitle = 'Soy un subtítulo';
        const wrapper = shallow(
            <PrimeraApp
                saludo = { saludo }
                subtitulo = { subtitle }
            />
        )

        const textParragraph = wrapper.find('p').text();

        expect( textParragraph ).toBe( subtitle );
    }); */
})