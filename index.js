import express from 'express';

const app=express();

const PORT=5000;

app.get("/burger",(req,res)=> {
    res.json({
        name:"Veg Burger",
        price:89
    })
})

app.get("/pizza",(req,res)=> {
    res.json({
        name:"cheese corn Pizza",
        price:99
    })
})

app.get("/pasta",(req,res)=> {
    res.json({
        name:"white sauce Pasta",
        price:110
    })
})


app.listen(5000, ()=>{
    console.log('server is running on port 5000');
})