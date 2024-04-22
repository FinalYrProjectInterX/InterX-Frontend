import connectDb from "middleware/mongoose";
import User from "models/User";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler=async(req,res)=>{
    if(req.method=='POST'){
      let {email,password}=JSON.parse(req.body);
      console.log(email,password);
      let m=await User.findOne({email:email});
      if(m){
        var bytes  = CryptoJS.AES.decrypt(m.password, 'secret123');
        var originalPass = bytes.toString(CryptoJS.enc.Utf8);
        if(password===originalPass){
        var token = jwt.sign({email:email,password:originalPass}, process.env.JWT_SECRET,{expiresIn:"2d"});
        res.status(200).json({success:true,authToken:token})
        }
        else{
          res.status(400).json({success:false,message:"Invalid Credentials!!"});
        }
      }
      else{
     res.status(400).json({success:false,message:"Invalid Credentials!!"});
      }
    }
    else{
        res.status(400).json({error:"this method is not allowed."})
    }
}

export default connectDb(handler);