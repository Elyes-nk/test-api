const Discussion = require("../models/Discussion");

exports.create = async (req, res) => {
  const newDiscussion = new Discussion({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const savedDiscussion = await newDiscussion.save();
    res.status(200).json(savedDiscussion);
  } catch (err) {
    res.status(500).json(err);
  }
}

exports.get = async (req, res) => {
  try {
    const discussion = await Discussion.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(discussion)
  } catch (err) {
    res.status(500).json(err);
  }
}

exports.getAll = async (req, res) => {
  try {
    const discussion = await Discussion.find({
      members: { $in: [req.params.userId] },
    }).populate('members');
    res.status(200).json(discussion);
  } catch (err) {
    res.status(500).json(err);
  }
}

