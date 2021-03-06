import { Schema } from 'mongoose';

const usersSchema = new Schema({
    userName: {
        type: String,
        trim:true,
        required:true,
        max:64
    },
    email:{
        type: String,
        trim:true,
        required:true,
        unique:true,
        lowecase: true
    },
    password: {
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false

    }
    
   
}, {timestamps: true})

export default usersSchema;