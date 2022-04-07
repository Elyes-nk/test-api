const router = require("express").Router();
const verify = require("../jsonwebtoken/verifyToken");
const storiesController = require("../controllers/storiesController");

//CREATE
router.post("/",  verify, storiesController.create);

//GET
router.get("/find/", verify, storiesController.get);

//GET ALL
router.get("/", verify, storiesController.getAll);

module.exports = router;
