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
    order:
    [
        {type: Schema.Types.ObjectId, ref: 'orders'}
       
    ]
}, {timestamps: true})

export default usersSchema;