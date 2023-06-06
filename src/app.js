const express = require("express");
const app = express();
const path = require("path");
require("./db/conn");
const port = process.env.PORT || 3000;
const hbs = require("hbs");
const bcrypt=require("bcrypt")


const Register = require("./models/register");

// * Add html file in dom

const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

console.log(path.join(__dirname, "../public"));
app.use(express.static(static_path));

//  to gate data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//  Add index. hbs page

app.set("view engine", "hbs");
app.set("views", views_path);
hbs.registerPartials(partials_path) * //
  app.get("/", (req, res) => {
    // res.send("hello i am leaning")

    //  for index.hbs page

    res.render("index");
  });

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

//  create a new user in our database

app.post("/register", async (req, res) => {
  try {
    // console.log(req.body.fullName);
    // res.send(req.body.fullName)

    const password = req.body.password;
    const conpassword = req.body.conpassword;

    if (password === conpassword) {
      const registerEmployee = new Register({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        conpassword: req.body.conpassword,
      });
      const registered = await registerEmployee.save();
      res.status(201).render("index");
    } else {
      res.send("password is not same");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

//  for login

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const useremail = await Register.findOne({ email: email });

    //  fOR MATCH PASSWORD
  const passwordmatch=await bcrypt.compare(password,useremail.password);


    // if (useremail.password === password){
    if (passwordmatch){
      res.status(201).render("index");
    } else {
      // alert("hello")
      res.send("<h1 style=color:red >Email & Password is not matching</h1>");
    }

    // res.send(useremail);
    // console.log(useremail);

  } catch (error) {
    res.status(400).send("invalid Email");
  }
});


//  For secure password 
// const bcrypt=require("bcrypt")

// const securePassword= async (password) => {
//   const passwordHash= await bcrypt.hash(password,10);
//   console.log(passwordHash)

//   const passwordmatch= await bcrypt.compare(password,passwordHash);
//   console.log(passwordmatch)
// }

// securePassword("aa9g9")



app.listen(port, () => {
  console.log(`server is runnig at port no ${port}`);
});
