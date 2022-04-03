const router = require("express").Router();
const verify = require("../jsonwebtoken/verifyToken");
const messagesController = require("../controllers/messagesController");

//CREATE
router.post("/",  verify, messagesController.create);

//GET
router.get("/find/", verify, messagesController.get);

//GET ALL
router.get("/", verify, messagesController.getAll);

module.exports = router;
