
import mongoose from "mongoose";
import dotenv from'dotenv';

dotenv.config();


 mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
    
 })
.then(() => console.log("DB connection successful"))
.catch(err => console.log("DB connection error", err))
const db = mongoose.connection;

  

export default db;
