const db = require('../../db')
const shopify = require('../../shopify')
const axios = require('axios');



module.exports.getAll = async(req,res) => {
    await db.query('SELECT * FROM public.restaurant', (err, result) => {
        if (err) {
          res.send({error:err.message})
        }
        else{
            res.send({data:result.rows})
        }
    })
};

module.exports.getOne = async(req,res) => {
  id = parseInt(req.params.id)
  db.query('SELECT * FROM public.restaurant WHERE r_id = $1',[id], (err, result) => {
      if (err) {
        res.send({error:err.message})
      }
      else{
          res.status(200).send({data:result.rows})
      }
    })
};

module.exports.create = async(req,res) => {
  const {r_id,r_name,r_street_name,r_building_number,r_extra_info,r_city,r_country,shopify_collection_id} = req.body;
  const query_params = [r_id,r_name,r_street_name,r_building_number,r_extra_info,r_city,r_country,shopify_collection_id]
  const insert_query =  "INSERT INTO public.restaurant (r_id,r_name,r_street_name,r_building_number,r_extra_info,r_city,r_country,shopify_collection_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)"
  
  db.query(insert_query, query_params, (err, result) => {
      if (err) {
        res.send({error:err.message})
      }
      else{
          res.status(200).send({messgae: `Restaurant ${r_name} created`})
      }
    })
};


module.exports.update = async(req,res) => {
  const {r_name,r_street_name,r_building_number,r_extra_info,r_city,r_country,shopify_collection_id} = req.body;
  const r_id = req.params.id
  const query_params = [r_id, r_name,r_street_name,r_building_number,r_extra_info,r_city,r_country,shopify_collection_id]
  const update_query =  "UPDATE public.restaurant set r_name = $2, r_street_name = $3, r_building_number = $4, r_extra_info = $5, r_city = $6, r_country = $7, shopify_collection_id = $8 WHERE r_id  = $1"
  
  db.query(update_query, query_params, (err, result) => {
      if (err) {
        res.send({error:err.message})
      }
      else{
          res.status(200).send({messgae: `Restaurant ${r_name} updated`})
      }
    })
};


module.exports.delete = async(req,res) => {
  id = parseInt(req.params.id)
  db.query('DELETE FROM restaurant WHERE r_id = $1',[id], (err, result) => {
      if (err) {
        res.send({error:err.message})
      }
      else{
          res.status(200).send({messgae : `Restaurant deleted with ID: ${id}`})
      }
    })
};

module.exports.getCollectionProducts = async(req,res) => {
  id = parseInt(req.params.id)
  let collection_id ; 
  db.query('SELECT * FROM restaurant WHERE r_id = $1',[id], (err, result) => {
      if (err) {
        res.send({error:err.message})
      }
      else{
          collection_id =  result.rows[0].shopify_collection_id
          const url = shopify.collectionProdcuts(collection_id)
          
          axios.get(url)
          .then(res => {
            res.send({data: res.data})
          })
          .catch(err => {
            res.send({error :err.message})
          });
      }
  })




};
