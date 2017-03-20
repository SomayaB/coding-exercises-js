import { expect } from 'chai'
import stringIndices from '../src/stringIndices'

describe('stringIndices()', () => {

  it('should be a function', function() {
    expect(stringIndices).to.be.a('function')
  })

  it('should return word at specific index', function() {
    expect(stringIndices("Catch me outside, how about that?", 3)).to.equal("outside")
  })
  
})
