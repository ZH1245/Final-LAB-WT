const matchService = require("../services/matchService");

module.exports = {
  getMatches: async (req, res) => {
    try {
      let matches = matchService.getMatches();
      return res.send(matches);
    } catch (e) {
      return res.status(400).send(e);
    }
  },
  getMatchById: async (req, res) => {
    try {
      let match = matchService.getMatchById(req.params.id);
      res.send(match);
    } catch (e) {
      res.status(400).send(e);
    }
  },
  createMatch: async (req, res) => {
    try {
      let newMatch = matchService.createMatch(req.body);
      res.send(newMatch);
    } catch (e) {
      res.status(400).send(e);
    }
  },
};
