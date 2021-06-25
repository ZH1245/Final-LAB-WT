const matchModel = require("../models/matchModel");

module.exports = {
  getMatches: async () => {
    let matches = matchModel.find({});
    if (!matches) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    } else {
      return matches;
    }
  },
  getMatchById: async (id) => {
    let match = matchModel.findById(id);
    if (!match) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    } else {
      return match;
    }
  },
  createMatch: async (data) => {
    let existing = matchModel.findOne({ ...data });
    if (!existing) {
      let newMatch = new matchModel({ ...data });
      await newMatch.save();
      return res.send("MATCH CREATED");
    } else {
      let e = new Error();
      e.message = "ALready_EXISTS";
      e.status = "FORBIDDEN";
      throw e;
    }
  },
};
