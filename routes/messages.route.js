const router = require("express").Router();
const verify = require("../jsonwebtoken/verifyToken");
const messagesController = require("../controllers/messagesController");

//CREATE
router.post("/",  verify, messagesController.create);

//GET
router.get("/find/", verify, messagesController.get);

module.exports = router;
