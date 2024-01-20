const jwt = require("jsonwebtoken");
const jwtpassword = "Prashant";

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const auth = req.headers.authorization;

  try {
    jwt.verify(auth, jwtpassword);
    next();
  } catch (e) {
    console.log(e);
    res.status(403).send("you are not authenticated");
  }
}

module.exports = userMiddleware;
