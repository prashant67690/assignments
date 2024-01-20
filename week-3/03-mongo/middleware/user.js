const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const userName = req.headers.username;
  const password = req.headers.password;
  try {
    const res = await User.findOne({ username: userName, password: password });
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

module.exports = userMiddleware;
