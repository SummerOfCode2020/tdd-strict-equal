var describe = require ('mocha').describe
var it = require ('mocha').it
const expect = require ('chai').expect

const sEqual = require('../strict-equal')
describe('strictEqual', () => {
    describe('sEqual', ()=> { 
        it('return true if both parameters are equal integers', () => {
            const answer = sEqual (10,10)
            expect (answer);(true)
        })
        it('return true if both parameters are equal strings ', () => {
            const answer = sEqual ('A','A')
            expect (answer); (true)
        })
        
        it('return false if both parameters are not the same data type', () => {
            const answer = sEqual (10,'A')
            expect (answer); (false)
        })
        it('return false if the parameters are different integers', () => {
            const answer = sEqual (11,10)
            expect (answer); (false)
        })
        it('return false if both parameters are different strings', () => {
            const answer = sEqual ('A','B')
            expect (answer); (false)
        })
        
    })
})