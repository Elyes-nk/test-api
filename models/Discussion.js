const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiscussionSchema = new Schema(
  {
    members: [
      { type: String }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Discussion", DiscussionSchema);
