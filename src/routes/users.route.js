const router = require("express").Router();
const usersController = require("../controllers/usersController")


//UPDATE
router.put("/:id", usersController.update);

//DELETE
router.delete("/:id", usersController.delete);

//GET
router.get("/find/:id", usersController.get);

//GET ALL
router.get("/", usersController.getAll);


module.exports = router;
