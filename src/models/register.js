const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const employeeSchema = new mongoose.Schema({
      fullname: {
            type: String,
            required: true,
      },
      email: {
            type: String,
            required: true,
            // unique:true
      },
      password: {
            type: String,
            required: true,
      },
      conpassword: {
            type: String,
            required: true,
      },
});

//  For secure password and work as middleware

employeeSchema.pre("save", async function (next) {
      if (this.isModified("password")) {
            console.log(`the current password is ${this.password}`);
            this.password = await bcrypt.hash(this.password, 10);

            console.log(`the current password is ${this.password}`);

            //  Not store Conform password
            // this.conpassword = undefined;
      }

      next();
});

//   we need to create a collections
const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;
