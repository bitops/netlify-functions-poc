const { it, expect } = require('@jest/globals');
const { welcomeMessage } = require('./../lib/index.js');
const { handler } = require('./../netlify/functions/echo.js');

describe('echo', () => {
  it('has a helper function', () => {
    expect(welcomeMessage("friend!")).toEqual("Hello friend!")
  })

  it('handles requests', async () => {
    const handlerResult = await handler({
      httpMethod: "GET"
    }, null);
    expect(handlerResult.statusCode).toEqual(200)
    expect(JSON.parse(handlerResult.body)?.message).toEqual("Hello GET 200")
  })
})
