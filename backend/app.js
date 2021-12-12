const express = require('express');
var cors = require('cors')


// set up express app
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use(cors()) // Use this after the variable declaration


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
