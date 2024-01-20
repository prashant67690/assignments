// Middleware for handling auth
const jwt = require("jsonwebtoken");
const jwtpassword = "Prashant";
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const auth = req.headers.authorization;

  try {
    jwt.verify(auth, jwtpassword);
    next();
  } catch (e) {
    console.log(e);
  }
}

module.exports = adminMiddleware;
