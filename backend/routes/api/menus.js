const express = require('express');
const router = express.Router();

const menusController = require("../controllers/menusControllers") 

router.get("/", menusController.getMenus);
router.get("/:id", menusController.getMenu);

module.exports = router;
