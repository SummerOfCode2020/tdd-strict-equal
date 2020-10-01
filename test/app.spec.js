const assert = require ('assert');
const strictEqual = require('../strictEqual.js');



describe('strictEqual test', function () {
  it('creates a function where 5 and 5 have the same value and type returns true', function () {
    assert.strictEqual(5, 5)
    
  });
} )