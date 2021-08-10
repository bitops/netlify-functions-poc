const { welcomeMessage } = require('./../../lib/index.js');

const handler = async (event, context) => {
  // dump request to Netlify console
  console.log(JSON.stringify(event))
  switch (event.httpMethod) {
    case "GET":
      return {
        statusCode: 200,
        body: JSON.stringify({message: `${welcomeMessage("GET 200")}`})
      }
    case "POST":
      return {
        statusCode: 200,
        body: JSON.stringify({message: `${welcomeMessage("POST 200")}`})
      }
    default:
      return {
        statusCode: 400,
        body: JSON.stringify({message: `${welcomeMessage("Error 400")}`})
      }
  }
};

module.exports = {
  handler
}
