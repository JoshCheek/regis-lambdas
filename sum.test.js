import sum from './sum';

describe("quick test", () => {
  it("passes", () =>
    expect(true).toEqual(true))
  // it("fails", () =>
  //   expect(true).toEqual(false))
})

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
