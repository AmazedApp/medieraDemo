const express=require('express');
const app=express();


app.get('/',(req,res)=>{
    console.log("It is working");
    res.send("Hello its me amazed");
});


app.listen(process.env.PORT || 3000,()=>{
    console.log("Your server is runnig on port 3000");
});