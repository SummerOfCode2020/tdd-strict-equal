// Declare our function to be tested, as well as the mocha and chai libraries needed.
const { expect } = require('chai')
var strictEqual = require('../equal.js')
var describe = require('mocha').describe
var it = require('mocha').it

describe('equals', () => {
  describe('strictEqual', () => {
    // test 1..
    it('Test if 5 and "5" are the same (false)', () => {
      // Setup test array
      var testData = [5, '5']
      // Call the strictEqual function with the testData
      var result = strictEqual(testData)

      // asserts what should be true
      expect(result).to.equal(false)
    }),
    // test 2..
    it('Test if "a" and "a" are the same (false)', () => {
      // Setup test array
      var testData = ['a', 'a']
      // Call the strictEqual function with the testData
      var result = strictEqual(testData)

      // asserts what should be true
      expect(result).to.equal(false)
    })
  })
})
