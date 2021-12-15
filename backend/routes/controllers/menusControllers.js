const db = require('../../db')
const shopify = require('../../shopify')
const axios = require('axios');



module.exports.getMenu = async(req, res) => {
    const shopify_product_id = req.params.id;
    const url = shopify.getProduct(shopify_product_id);
    
    axios.get(url)
    .then(result => {
      res.send({data: result.data})
    })
    .catch(err => {
      res.send({error: erro.message})
    });

};


module.exports.getMenus = async(req, res) => {
    const url = shopify.getProducts();
    
    axios.get(url)
    .then(result => {
      res.send({data:result.data})
    })
    .catch(err => {
      res.send({error: erro.message})
    });


};

