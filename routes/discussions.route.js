const router = require("express").Router();
const verify = require("../jsonwebtoken/verifyToken");
const discussionsController = require("../controllers/discussionsController");

//CREATE
router.post("/",  verify, discussionsController.create);

//GET DISCUSSION OF TWO USERS
router.get("/find/", verify, discussionsController.get);

//GET
router.get("/", verify, discussionsController.getAll);

module.exports = router;
