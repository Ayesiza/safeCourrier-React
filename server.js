import express  from'express';
import cors  from'cors';
import bodyParser from 'body-parser';
import './backend/config';
import data from './backend/data';
import apiRouter from  './backend/routers/apiRouters'

 
 require('dotenv').config();

const app = express();

app.use(express.json());
app.use(bodyParser.json())
app.use(cors())
app.use('/api', apiRouter)
app.get('/',(req, res) => {
    res.send({message:"welcome to safeCourrier"})
});
app.get("/api/orders/:id", (req, res) => {
    const orderId = req.params.id;
    const order = data.orders.find(x => x._id === orderId);
    if (order)
      res.send(order);
    else
      res.status(404).send({ msg: "Order Not Found." })
  });
  app.get("/api/orders", (req, res) => {
    res.send(data.orders);
  });
  

const port = process.env.PORT || 5000 ;
app.listen(port, () => { 
    console.log(`server is running on port: ${port}`)
})

module.exports = app;