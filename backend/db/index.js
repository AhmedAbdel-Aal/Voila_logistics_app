const { Pool } = require('pg')
const postgresConfig= require("../config/keys");
const pool = new Pool(postgresConfig)

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}
