import { expect } from 'chai'
import guessTheNumber from '../src/guessTheNumber'

describe('guessTheNumber()', () => {

  it('should be a function', function(){
    expect(guessTheNumber).to.be.a('function')
  })

//Test below not running because prompt isn't supported
  xit('should generate a number between 1 and 100', function(){
  expect(guessTheNumber(10)).to.equal(true)
  })


})
