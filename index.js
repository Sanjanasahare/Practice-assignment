import express from 'express';

const app=express();
app.use(express.json());

const PORT=5000;

app.get("/order/food",(req,res)=> {
    const {menu,price,quantity}=req.query;

    const totalprice= parseInt(price) * parseInt(quantity);

    res.json({
        message:`You have ordered ${quantity} ${menu}`,
        bill:`Your total bill is ${totalprice}`
    })
})
//param
app.get("/food:type",(req,res)=>{

    const {type} = req.params;

    if(type=="veg"){
        return res.json({
            message: "You have ordered veg food"
        })
    }
    else{
        return res.json({
            message:"You have ordered non-veg food"
        })
    }
})

app.get("/orders",(req,res)=>{
    const {user,country}=req.headers;

    res.json({
        details:`you are ${user} from ${country}`
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



app.post("/user",(req, res)=>{
    const {name, age} = req.body;

    res.json({
        message:`Hello ${name} ,you are ${age} year old`
    })
})


app.listen(5000, ()=>{
    console.log('server is running on port 5000');
})