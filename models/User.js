const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    about:{
        type:String,
        default:'',
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

mongoose.models={}
export default mongoose.model("User",UserSchema);