const Message = require("../models/Message");

exports.create = async (req, res) => {
    const newMessage = new Message(req.body);
    try {
      const savedMessage = await newMessage.save();
      res.status(201).json(savedMessage);
    } catch (err) {
      res.status(500).json(err);
    }
}

exports.get = async (req, res) => {
  try {
    const messages = await Message.find({
      discussionId: req.body.discussionId,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
}
