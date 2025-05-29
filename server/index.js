const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()

const corsOptions = {
  origin: 'http://localhost:5173',
};

app.use(cors(corsOptions));

app.use(express.json())

app.post('/order',async (req,res)=>{
    const order = req.body;
    console.log('order recieved')
    fs.appendFile('./order.json',JSON.stringify(order)+"\n",(err)=>{
        if (err){
            console.log("Error in saving order",order)
            return res.status(500).send("Error in placing order")
        }
        console.log('order placed successfully')
        res.send("Order placed successfully")
    })
})

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})