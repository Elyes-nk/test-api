const Story = require("../models/Story");

exports.create = async (req, res) => {
    const newStory = new Story(req.body);
    try {
      const savedStory = await newStory.save();
      res.status(201).json(savedStory);
    } catch (err) {
      res.status(500).json(err);
    }
}

exports.get = async (req, res) => {
    try {
      const stories = await Story.find({
        user:req.body.id,
      }).populate("user")
      res.status(200).json(stories);
    } catch (err) {
      res.status(500).json(err);
    }
}

exports.getAll = async (req, res) => {
    try {
      const stories = await Story.find().populate("user")
      res.status(200).json(stories);
    } catch (err) {
      res.status(500).json(err);
    }
}