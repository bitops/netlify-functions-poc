const { welcomeMessage } = require('./lib/index.js');

module.exports.handler = async (event, context) => {
  // dump request to Netlify console
  console.log(JSON.stringify(event))
  switch (event.httpMethod) {
    case "GET":
      return {
        statusCode: 200,
        body: JSON.stringify({message: `${welcomeMessage("friend!")}`})
      }
    case "POST":
      return {
        statusCode: 200,
        body: JSON.stringify({message: "post received"})
      }
    default:
      return {
        statusCode: 400,
        body: JSON.stringify({message: "not found"})
      }
  }
};
