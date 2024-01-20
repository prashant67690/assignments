const { Admin } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const userName = req.headers.username;
  const password = req.headers.password;

  try {
    const res = await Admin.findOne({ username: userName, password: password });
    if (res) {
      next();
    } else {
      res.status(403).json({ msg: "No User Exist" });
    }
  } catch (err) {
    console.log(err);
    res.status(502).json({ msg: "there is some error with the system" });
  }
}

module.exports = adminMiddleware;
