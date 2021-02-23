import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas en CounterApp.test', () => {
    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    })

    test('should shows <CounterApp />', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should shows value for default of 100>', () => {

        const wrapper = shallow( <CounterApp value = { 100 } /> );

        const counterText = wrapper.find('h2').text();

        expect( counterText ).toBe('100');
    });

    test('should button +1', () => {

        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('11');
    })

    test('should button -1', () => {

        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('9');
    })

    test('should value default for btn reset', () => {

        const wrapper = shallow( <CounterApp value = { 105 } /> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('105');
    })
    
    
})
