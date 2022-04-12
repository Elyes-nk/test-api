const router = require("express").Router();
const verify = require("../jsonwebtoken/verifyToken");
const discussionsController = require("../controllers/discussionsController");

//CREATE
router.post("/",  verify, discussionsController.create);

//GET DISCUSSION OF TWO USERS
router.get("/find/:firstUserId/:secondUserId", verify, discussionsController.get);

//GET DISCUSSION OF ONE USER
router.get("/:userId", verify, discussionsController.getAll);

module.exports = router;
