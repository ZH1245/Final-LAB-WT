const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  city: { type: String, required: true },
  date: { type: Date, required: true },
  teamA: { type: String, required: true },
  teamB: { type: String, required: true },
});

module.exports = mongoose.model("matchModel", Schema);
