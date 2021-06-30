import { Schema } from 'mongoose';

const orderSchema = new Schema({
    userName:{
        type:String,
        required:true,
    },
    parcelName:{
        type:String,
        required:true,
    },
    receipient:{
        type:String,
        required:true,
    },
    destination:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
   
}, {timestamps:true});

export default orderSchema;
