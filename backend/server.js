import express from "express";
import data from './data';

const app = express();

app.get("/api/orders", (req, res) =>{
    
    res.send(data.orders)
});

app.listen(5000, () =>{ console.log("server started at http://localhost:5000") })