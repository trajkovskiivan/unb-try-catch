const express = require("express");

const propertyController = require("../controllers/property.controllers");

const router = express.Router();

router.get("/", propertyController.property_index);
router.get("/:id", propertyController.property_details);
router.post("/", propertyController.property_create);
router.put("/", propertyController.property_update);
router.delete("/:id", propertyController.property_delete);

module.exports = router;