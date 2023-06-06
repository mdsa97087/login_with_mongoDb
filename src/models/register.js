const mongoose=require("mongoose");

const employeeSchema=new mongoose.Schema({

      fullname:{
            type:String,
            required:true
      },
      email:{
            type:String,
            required:true,
            // unique:true
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

const Register= new mongoose.model("Register", employeeSchema)

module.exports=Register
