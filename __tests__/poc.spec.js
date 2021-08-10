const { welcomeMessage } = require('./../lib/index.js');

describe('stuff', () => {
  it('runs', () => {
    expect(welcomeMessage("friend!")).toEqual("Hello friend!")
  })
})
