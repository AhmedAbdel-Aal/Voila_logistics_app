// in case any spaces added by the scripts to the env
const environment = process.env.NODE_ENV.replace(/ /g,'')

if(environment=== 'production') 
    module.exports = require('./keys_prod')
if(environment === 'dev') 
    module.exports = require('./keys_dev')
else
    module.exports = require('./keys_test')
