const UserService = require("../services/userService");

module.exports = {
  loginUser: async (req, res) => {
    try {
      let getData = await UserService.loginUser(req.body);
      console.log(`token  ${getData}`);
      return res.send(getData);
    } catch (e) {
      return res.status(400).send(e);
    }
  },
  signUpUser: async (req, res) => {
    try {
      let signup = await UserService.signUpUser(req.body);
      return res.send(signup);
    } catch (e) {
      return res.send(e);
    }
  },
  getUser: async (req, res) => {
    try {
      let user = await UserService.getUser(req.body);
      return res.send(user);
    } catch (e) {
      return res.status(400).send(e);
    }
    getUserById: async (req, res) => {
      try {
        let user = await UserService.getUserById(req.body);
        return res.send(user);
      } catch (e) {
        return res.status(400).send(e);
      }
    };
  },
};
