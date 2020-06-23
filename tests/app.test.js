// `strictEqual(5, '5')` should return `false` 
// `strictEqual('a', 'a')` should return `true`
// 'strictEqual(6,6) should return 'true'
var describe = require('mocha').describe
var it = require('mocha').it

const assert = require('chai').assert
// const app = require('../app.js')--this the same as below line
const { strictEqual } = require('../app.js')

describe('strictEqual', function () {
  it('false should return', function () {
    assert.equal(strictEqual(5, '5'), 'false')
  });
  it('false should return', function () {
    assert.equal(strictEqual('a', 'a'), 'true')
  })
  it('false should return', function () {
    assert.equal(strictEqual(6, 6), 'true')
  });
})


