const shopifyConfig= require("./config/keys").shopify;

const {shopName, password, apiKey, apiVersion} = shopifyConfig

module.exports.collectionProdcuts = (collectionId) => {
    return `https://${apiKey}${password}@${shopName}.myshopify.com/admin/api/${apiVersion}/collections/${collectionId}/products.json`

}  