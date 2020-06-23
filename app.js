// `strictEqual(num, 'num')` should return `false` 
// `strictEqual('num', 'num')` should return `true`
// 'strictEqual(num,num) should return 'true'
// let a = [5,'a',6];
// let b = ['5','a',6];

module.exports = {

  strictEqual(a, b) {
    if (a === b) {
      return 'true'
    }
    else {
      return 'false'
    }
  }

}
