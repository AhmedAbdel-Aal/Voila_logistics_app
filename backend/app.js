const express = require('express');


// set up express app
const app = express();



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
