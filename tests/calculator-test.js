let expect = require('expect');

import {Calculator} from '../app/calculator';

describe('Calculator', () => {

    it('1: should add two numbers', () => {
        let calculator = new Calculator(1, 4);
        let sum = calculator.add();
        expect(sum).toBe(5);
    });

    it('2: should subtract two numbers', () => {
        let calculator = new Calculator(4, 1);
        let sum = calculator.subtract();
        expect(sum).toBe(3);
    });

    it('3: should subtract two numbers, but false', () => {
        let calculator = new Calculator(3, 1);
        let sum = calculator.subtract();
        expect(sum).toBe(2);
    });

    it('4: subtract two numbers, without constructor values', () => {
        let calculator = new Calculator();
        let sum = calculator.subtract(5, 1);
        expect(sum).toBe(4);
    });

});

