import mongoose  from "mongoose";
import userSchema  from './schema/userSchema';

const User = mongoose.model("users", userSchema);



export default User;