const assert = require('assert')
const strictEqual = require('../strict-equal.js')
const describe = require('mocha').describe
const it = require('mocha').it

describe('Compare', () => {
  describe('strictEqual', () => {
    it('creates a strictEqual function where 5 and \'5\' return false', () => {
      // setup test data
      var falseInput = [5, '5']

      // call the function with the test data
      var output1 = strictEqual(falseInput)

      // asserts what should be true
      assert.equal(output1, false)
    })

    it('creates a strictEqual function where "a" and "a" return true', () => {
      // setup test data
      var trueInput = ['a', 'a']

      // call the function with the test data
      var output2 = strictEqual(trueInput)

      // asserts what should be true
      assert.equal(output2, true)
    })
  })
})
