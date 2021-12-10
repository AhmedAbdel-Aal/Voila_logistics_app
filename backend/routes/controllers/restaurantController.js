const db = require('../../db')


module.exports.getAll = async(req,res) => {
    await db.query('SELECT * FROM restaurant', (err, result) => {
        if (err) {
          console.log(err)
        }
        else{
            res.send(result.rows)
        }
      })
};

module.exports.getOne = async(req,res) => {
  id = req.params.id
  db.query('SELECT * FROM restaurant WHERE r_id = $1',[id], (err, result) => {
      if (err) {
        console.log(err)
      }
      else{
          res.send(result.rows)
      }
    })
};

// module.exports.create =  
// module.exports.update = 
// module.exports.delete = 
