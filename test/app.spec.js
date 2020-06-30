// Use this library to test our code
const describe = require('mocha').describe
const it = require('mocha').it
const { expect } = require('chai')
// const assert = require('assert').strict
const strictEqual = require('../strictEqual')

describe('Is equal', function () {
  it('returns true if data is a match', function () {
    // Given
    let valA = 3
    let valB = 4
    let result = strictEqual(valA, valB)

    expect(result).to.equal(false)
  })
})
