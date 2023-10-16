const express = require("express");

const app = express();


app.get('/', (req, res)=>{
    res.json({type : "Get"})
})

app.listen(8080, ()=>{
    console.log("Server started");
})