const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course, User } = require("../db/index");
const jwt = require("jsonwebtoken");
const jwtPassword = "Prashant";

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const result = await Admin.create({
    username,
    password,
  });

  res.json({
    message: "Admin created successfully",
  });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.find({
    username,
    password,
  });

  if (user) {
    const token = jwt.sign({ username }, jwtPassword);
    res.status(200).json(token);
  } else {
    res.status(411).json({
      message: "Incorrect email and pass",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;
  const result = await Course.create({
    title,
    description,
    price,
    imageLink,
  });

  if (result) {
    res
      .status(200)
      .json({ message: "course created scuccessfully", id: result._id });
  } else {
    res.send(500);
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const result = await Course.find({});
  if (res) {
    res.status(200).json(result);
  } else {
    res.status(404).send("No data found");
  }
});

module.exports = router;
