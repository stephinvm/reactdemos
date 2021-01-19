const mongoose = require('mongoose');
const feedschema = new mongoose.Schema({
  name: {
    type: String,
  },
  place:{
      type:String
  }
},
  { timestamps: true }
);
const Feeds = mongoose.model("feeds", feedschema);

module.exports = Feeds;
