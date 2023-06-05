const mongoose=require("mongoose");

const employeeShema=new mongoose.Schema({

      fullName:{
            type:String,
            required:true
      },
      email:{
            type:String,
            required:true,
            unique:true
      },
      password:{
            type:String,
            required:true
      },
      conpassword:{
            type:String,
            required:true
      },

})


//   we need to create a collections

const Register= new mongoose.model("Register", employeeShema)

module.exports=Register
