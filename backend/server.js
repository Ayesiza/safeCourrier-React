import express  from'express';
import cors  from'cors';
import './config'
import apiRouter from  './routers/apiRouters'

 
 require('dotenv').config();

const app = express();



app.use(express.json());
app.use(cors())
app.use('/api', apiRouter)


const port = process.env.PORT;
app.listen(port, () => { 
    console.log(`server is running on port: ${port}`)
})

module.exports = app;