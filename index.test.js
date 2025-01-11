const utils = require('./index.js');

describe('Test fahrenheit to celsius conversion', () => {
    test('32 degrees fahrenheit should be 0 degrees celsius', () => {
        expect(utils.fahrenheitToCelsius(32)).toEqual(0);
    });
    test('-40 degrees fahrenheit should be -40 degrees celsius', () => {
        expect(utils.fahrenheitToCelsius(-40)).toEqual(-40);
    });
});


describe('Test celsius to fahrenheit conversion', () => {
    test('100 degrees celsius should be 0 degrees fahrenheit', () => {
        expect(utils.celsiusToFahrenheit(100)).toEqual(212);
    });
    test('0 degrees celsius should be 32 degrees fahrenheit', () => {
        expect(utils.celsiusToFahrenheit(0)).toEqual(32);
    });
});

describe('Test getting the first string from an array', () => {
    test('Returns the first item if it is a string', () => {
        const testList = ['hello', 'world'];
        expect(utils.getFirstStringFromArray(testList)).toBe('hello');
    });
    test('Returns null for an empty array', () => {
        // Write your test code here
    });
    test('Returns null if no strings are in the array', () => {
        // Write your test code here
    });
    test('Returns the second item if the first item is a number', () => {
        // Write your test code here
    });
});