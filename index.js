// this pulls the code from equal.js and renames it to run
var run = require('./equal.js')

// setup prompt sync so we can get input from the user
const prompt = require('prompt-sync')()

// Setup the question and answer
console.log('So you are here to compare two values and see if they are EXACTLY the same?')

// Ask for value 1
const value1 = prompt('What is your first value?   ')

// Ask for value 2
const value2 = prompt('Okay, what about your second value?   ')

// test their input
const equalResult = run(value1, value2)

// run equal.js using the user's input
if (equalResult === true) {
  // display result if they are the same
  console.log('Yes! Your two values are EXACTLY the same.')
} else {
  // display result if they are not
  console.log('No sorry! Your two values are not EXACTLY the same')
}



