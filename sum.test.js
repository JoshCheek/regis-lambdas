'use strict'

const assert = require('chai').assert
const sum    = require('./sum')

describe("quick test", () => {
  it("passes", () =>
    assert.equal(true, true))
  it("fails", () =>
    assert.equal(true, false))
  it("passes 2", () =>
    assert.equal(true, true))
})

it('adds 1 + 2 to equal 3', () => {
  assert.equal(sum(1, 2), 3);
});
