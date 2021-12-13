const db = require('../../db')
const shopify = require('../../shopify')
const axios = require('axios');



module.exports.getMenu = async(req, res) => {
    const shopify_product_id = req.params.id;
    const url = shopify.getProduct(shopify_product_id);

    axios.get(url)
    .then(res => {
      const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
      console.log('Status Code:', res.status);
      console.log('Date in Response header:', headerDate);
      res.send({data: res.data})
    })
    .catch(err => {
      res.send(err.message)
    });

};


module.exports.getMenus = async(req, res) => {
    const url = shopify.getProducts();
    console.log(url)
    axios.get(url)
    .then(result => {
      const headerDate = result.headers && result.headers.date ? result.headers.date : 'no response date';
      console.log('Status Code:', result.status);
      console.log('Date in Response header:', headerDate);
      return result.data
    })
    .catch(err => {
      res.send(err.message)
    })
    .then((data)=>{
      res.send({data})
    });

};

