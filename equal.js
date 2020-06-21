// Create our strict equal function, tests if dataA is the exact same as B, if so return true, if not false.
function strictEqual(dataA, dataB) {
  return dataA === dataB
}

// export our function to be used in index.js and the test
module.exports = strictEqual
