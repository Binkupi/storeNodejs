//Cài đặt express.js
const express=require('express');
const app=express();
const port=3000;
app.get('/tintuc',(req,res,next)=>
{
    res.send('Hello World!');
})
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});