const express = require("express");

const userController = require("../controllers/user.controllers");

const router = express.Router();

router.get("/me", userController.user_index);
router.post("/signup", userController.user_signup);
router.post("/signin", userController.user_signin);
router.put("/me", userController.user_update);
router.delete("/me", userController.user_delete);

router.get("/:id", userController.user_find);

module.exports = router;