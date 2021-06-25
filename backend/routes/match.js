const router = require("express").Router();
const matchController = require("../controllers/matchController");
const adminAuth = require("../middlewares/adminAuth");

router.route("/get").get(matchController.getMatches);
router.route("/get/:id").get(matchController.getMatchById);
router.route("/create").post(matchController.createMatch);

module.exports = router;
