const router = require("express").Router();
const verify = require("../jsonwebtoken/verifyToken");
const usersController = require("../controllers/usersController")

//UPDATE
router.put("/", verify, usersController.update);

//DELETE
router.delete("/", verify, usersController.delete);

//GET
router.get("/find/", verify, usersController.get);

//GET ALL
router.get("/", usersController.getAll);


module.exports = router;
