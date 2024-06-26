import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        required:true,
        type:String,
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String
    },
    refreshToken:{
        type:String,
        default: ""
    }
});


const userModel = mongoose.model("User", userSchema);

export default userModel;