const db = require('../../db')
const shopify = require('../../shopify')
const axios = require('axios');



module.exports.wehbookListener = async(req, res) => {
	console.log(req.body);
	res.send("Notification with an order!");
    // to be handeled later depends on how the data recieved structure looks like
};

