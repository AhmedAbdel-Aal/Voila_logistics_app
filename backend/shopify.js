const shopifyConfig= require("./config/keys").shopify;

const {shopName, password, apiKey, apiVersion} = shopifyConfig

module.exports.collectionProdcuts = (collectionId) => {
    return `https://${apiKey}:${password}@${shopName}.myshopify.com/admin/api/${apiVersion}/collections/${collectionId}/products.json`

}  

module.exports.getProduct = (productId) => {
    return `https://${apiKey}:${password}@${shopName}.myshopify.com/admin/api/${apiVersion}/products/${productId}.json`

}  

module.exports.getProducts = () => {
    return `https://${apiKey}:${password}@${shopName}.myshopify.com/admin/api/${apiVersion}/products.json`

}  