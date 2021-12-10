const express = require('express');


// set up express app
const app = express();

const postgresConfig= require("./config/keys");

console.log(postgresConfig)

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// const Pool = require('pg').Pool
// const pool = new Pool(postgresConfig)


//Entry point
// app.get('/menus',(req,res) =>{
//     pool.query('SELECT * FROM menus', (error, results) => {
//         if (error) {
//           throw error
//         }
//         res.status(200).json(results.rows)
//       })
// })

//API routes
const restaurantsRoutes=require("./routes/api/resturants")

//Route handlers
app.use('/restaurant', restaurantsRoutes)



//Entry point
app.get('/',(req,res) =>{
    res.send(`<h1>Voila logistics</h1>`)
})


//non existing routes
app.use((req,res,next)=>{
    const error = new Error("request not found");
    error.status= 404;
    next(error);
 })

app.use((error,req,res,next)=>{
    res.status (error.status ||500);
    res.json({
        error :{
            msg : error.message
        }
    })
})
module.exports = app ;
