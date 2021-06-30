import express  from'express';
import cors  from'cors';
import './backend/config'
import apiRouter from  './backend/routers/apiRouters'

 
 require('dotenv').config();

const app = express();



app.use(express.json());
app.use(cors())
app.use('/api', apiRouter)
app.get('/',(req, res) => {
    res.send({message:"welcome to safeCourrier"})
});


const port = process.env.PORT|| 3000 ;
app.listen(port, () => { 
    console.log(`server is running on port: ${port}`)
})

module.exports = app;