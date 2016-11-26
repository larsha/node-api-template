import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiAsPromised)
chai.should()

describe('Example', function () {
  it('test', function () {
    expect(1).to.equal(1)
  })
})
