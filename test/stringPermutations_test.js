import { expect } from 'chai'
import stringPermutations from '../src/stringPermutations'

describe('stringPermutations()', () => {

  it('should be a function', function() {
    expect(stringPermutations).to.be.a('function')
  })

  it('every permutation of any given word', function() {
    expect(stringPermutations('bar')).to.equal(["bar", "bra", "abr", "arb", "rba", "rab"])
  })

})
