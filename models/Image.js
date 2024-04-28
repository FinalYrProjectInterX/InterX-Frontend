const mongoose=require('mongoose');

const ImageSchema=new mongoose.Schema({
     filename:{
        type:String,
        required:true
     },
     path:{
        type:String,
        required:true
     }
},{timestamps:true})

mongoose.models={}
export default mongoose.model("Image",ImageSchema);