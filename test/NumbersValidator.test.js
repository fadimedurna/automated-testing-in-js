/* global describe, it */

const assert = require('assert');
const NumbersValidator = require('../src/NumbersValidator');

describe('NumbersValidator', () => {
  let validator;

  // Create a new instance before each test
  const createValidator = () => {
    validator = new NumbersValidator();
  };

  describe('isNumberEven()', () => {
    it('should return true for an even number', () => {
      createValidator();
      assert.strictEqual(validator.isNumberEven(4), true);
    });

    it('should return false for an odd number', () => {
      createValidator();
      assert.strictEqual(validator.isNumberEven(5), false);
    });

    it('should throw an error for a non-number value', () => {
      createValidator();
      assert.throws(() => validator.isNumberEven('4'), {
        message: '[4] is not of type "Number" it is of type "string"',
      });
    });
  });

  describe('getEvenNumbersFromArray()', () => {
    it('should return only even numbers from an array', () => {
      createValidator();
      assert.deepStrictEqual(
        validator.getEvenNumbersFromArray([1, 2, 3, 4, 5, 6]),
        [2, 4, 6],
      );
    });

    it('should return an empty array when there are no even numbers', () => {
      createValidator();
      assert.deepStrictEqual(validator.getEvenNumbersFromArray([1, 3, 5]), []);
    });

    it('should return an empty array for an empty array', () => {
      createValidator();
      assert.deepStrictEqual(validator.getEvenNumbersFromArray([]), []);
    });

    it('should throw an error when the argument is not an array', () => {
      createValidator();
      assert.throws(() => validator.getEvenNumbersFromArray(123), {
        message: '[123] is not an array of "Numbers"',
      });
    });

    it('should throw an error when the array contains non-number values', () => {
      createValidator();
      assert.throws(() => validator.getEvenNumbersFromArray([1, '2', 3]), {
        message: '[1,2,3] is not an array of "Numbers"',
      });
    });
  });

  describe('isAllNumbers()', () => {
    it('should return true when all array elements are numbers', () => {
      createValidator();
      assert.strictEqual(validator.isAllNumbers([1, 2, 3]), true);
    });

    it('should return false when the array contains non-number values', () => {
      createValidator();
      assert.strictEqual(validator.isAllNumbers([1, '2', 3]), false);
    });

    it('should return true for an empty array', () => {
      createValidator();
      assert.strictEqual(validator.isAllNumbers([]), true);
    });

    it('should throw an error when the argument is not an array', () => {
      createValidator();
      assert.throws(() => validator.isAllNumbers('123'), {
        message: '[123] is not an array',
      });
    });
  });

  describe('isInteger()', () => {
    it('should return true for an integer', () => {
      createValidator();
      assert.strictEqual(validator.isInteger(10), true);
    });

    it('should return false for a decimal number', () => {
      createValidator();
      assert.strictEqual(validator.isInteger(10.5), false);
    });

    it('should throw an error when the argument is not a number', () => {
      createValidator();
      assert.throws(() => validator.isInteger('10'), {
        message: '[10] is not a number',
      });
    });
  });
});
