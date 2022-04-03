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
      const messageSent = await Message.find({
        sender:req.user.id,
        receiver:req.body.id
      }) 
        .populate("sender")
        .populate("receiver");
      const messageReceived = await Message.find({
        sender:req.body.id,
        receiver:req.user.id
      })
        .populate("sender")
        .populate("receiver");
      res.status(200).json([...messageSent, ...messageReceived]);
    } catch (err) {
      res.status(500).json(err);
    }
}

exports.getAll = async (req, res) => {
    try {
      const messagesSent = await Message.find({
        sender:req.user.id
      })
        .populate("sender")
        .populate("receiver");
      const messagesReceived = await Message.find({
        receiver:req.user.id
      })
        .populate("sender")
        .populate("receiver");
      res.status(200).json([...messagesSent, ...messagesReceived]);
    } catch (err) {
      res.status(500).json(err);
    }
}