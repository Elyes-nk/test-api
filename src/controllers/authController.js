const User = require("../models/User");

exports.register = async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });
  try {
      const user = await newUser.save();
      res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
}

exports.login = async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      !user && res.status(401).json("Wrong password or username!");
      user.password !== req.body.password && res.status(401).json("Wrong password or username!");
  
      const { password, ...info } = user._doc;
      res.status(200).json({ ...info });
    } catch (err) {
      res.status(500).json(err);
    }
}
