const { Pool } = require('pg')
const postgresConfig= require("../config/keys").postgres;
const pool = new Pool(postgresConfig)

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, (err, res) => {
      // define common behavior of all queries
      
      // apply the required callback of each query
      callback(err, res)
    })
  },
}
