import express from 'express';

const app=express();

app.get('/samosa',(req,res)=>{
    res.send("Here is your samosa")
})

app.get('/jalebi',(req,res)=>{
    res.send("Here is your jalebi")
})
app.listen(5000, ()=>{
    console.log('server is running on port 5000');
})