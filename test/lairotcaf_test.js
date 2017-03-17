import { expect } from 'chai'
import lairotcaf from '../src/lairotcaf'

describe('lairotcaf()', () => {

  it('should be a function', function() {
    expect(lairotcaf).to.be.a('function')
  })

  it('should return reversed factorinal', function() {
    expect(lairotcaf(720)).to.equal("720 = 6!")
  })

})
