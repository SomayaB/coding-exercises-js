import { expect } from 'chai'
import disemvoweling from '../src/disemvowling'

describe('disemvoweling()', () => {

  it('should be a function', function(){
    expect(disemvoweling()).to.be.a('function')
  })

  it('should remove vowels, uppercase letters, special characters and spaces from string', function(){
  expect(disemvoweling('Hello World!')).to.equal('hllwrld')
  })

})
