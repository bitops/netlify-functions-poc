
module.exports.handler = async (event, context) => {
  switch (event.httpMethod) {
    case "GET":
      return {
        statusCode: 200,
        body: JSON.stringify({message: "get received"})
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
