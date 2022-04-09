const router = require("express").Router();
const verify = require("../jsonwebtoken/verifyToken");
const discussionsController = require("../controllers/discussionsController");

//CREATE
router.post("/",  verify, discussionsController.create);

//GET
router.get("/find/", verify, discussionsController.get);

//GET DISCUSSION OF TWO USERS
router.get("/", verify, discussionsController.getAll);

module.exports = router;
