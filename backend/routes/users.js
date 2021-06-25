const router = require("express").Router();
const userController = require("../controllers/userController");
const userRules = require("../validation/userValidation");
const validation = require("../helpers/validation");

/* GET users listing. */
router
  .route("/login")
  .post(userRules.loginUserRules(), validation, userController.loginUser);
router
  .route("/signup")
  .post(userRules.signUpUserRules(), validation, userController.signUpUser);

module.exports = router;
