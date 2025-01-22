const utils = require('./index.js');

describe('Test fahrenheit to celsius conversion', () => {
    test('32 degrees fahrenheit should be 0 degrees celsius', () => {
        expect(utils.fahrenheitToCelsius(32)).toBe(0);
    });
    test('-40 degrees fahrenheit should be -40 degrees celsius', () => {
        expect(utils.fahrenheitToCelsius(-40)).toBe(-40);
    });
});


describe('Test celsius to fahrenheit conversion', () => {
    test('100 degrees celsius should be 0 degrees fahrenheit', () => {
        expect(utils.celsiusToFahrenheit(100)).toBe(212);
    });
    test('0 degrees celsius should be 32 degrees fahrenheit', () => {
        expect(utils.celsiusToFahrenheit(0)).toBe(32);
    });
});

describe('Test getting the first string from an array', () => {
    test("Returns the first item if it is a string", () => {
      const testList = ["hello", "world"];
      expect(utils.getFirstStringFromArray(testList)).toBe("hello");
    });
    test("Returns null for an empty array", () => {
      const testList = [];
      expect(utils.getFirstStringFromArray(testList)).toBeNull();
    });
    test("Returns null if no strings are in the array", () => {
      const testList = [1, 2, 3, 4, 5, 6];
      expect(utils.getFirstStringFromArray(testList)).toBeNull();
    });
    test("Returns the second item if the first item is a number", () => {
      const testList = [1, "Hello word"];
      expect(utils.getFirstStringFromArray(testList)).toBe("Hello word");
    });
});