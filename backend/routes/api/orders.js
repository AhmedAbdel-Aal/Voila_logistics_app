const express = require('express');
const router = express.Router();

const ordersController = require("../controllers/ordersController") 

router.post("/webhook/", ordersController.wehbookListener);

module.exports = router;
