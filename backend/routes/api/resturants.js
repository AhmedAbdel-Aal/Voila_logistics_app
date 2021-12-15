const express = require('express');
const router = express.Router();

const restaurantController = require("../controllers/restaurantController") 

//CRUDS admin
router.get("/", restaurantController.getAll);
router.get("/:id", restaurantController.getOne);
router.post("/", restaurantController.create);
router.put("/:id", restaurantController.update);
router.delete("/:id", restaurantController.delete);

router.get("/:id/collection/", restaurantController.getCollectionProducts);

module.exports = router;
