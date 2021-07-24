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


const port = process.env.PORT || 5000 ;
app.listen(port, () => { 
    console.log(`server is running on port: ${port}`)
})

module.exports = app;