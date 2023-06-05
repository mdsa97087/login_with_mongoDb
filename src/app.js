const express=require("express")
const app=express();
const path=require("path");
require("./db/conn")
const port=process.env.PORT || 3000;
const hbs=require("hbs")

const Register=require("./models/register")



// * Add html file in dom 

const static_path=path.join(__dirname,"../public")
const views_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")


console.log(path.join(__dirname,"../public"))
app.use(express.static(static_path))

//  to gate data
app.use(express.json());
app.use(express.urlencoded({extended:false}))


//  Add index. hbs page

app.set("view engine", "hbs")
app.set("views", views_path)
hbs.registerPartials(partials_path)


*// 



app.get("/", (req,res) => {
      // res.send("hello i am leaning")

//  for index.hbs page

      res.render("index")
})

app.get("/register", (req,res) => {
      res.render("register")
})

app.get("/login", (req,res) => {
      res.render("login")
})


//  create a new user in our database

app.post("/register", async(req,res) => {
    try{

    }catch(error){
      res.status(400).send(error)
    }
})

app.listen(port , () => {
      console.log(`server is runnig at port no ${port}`)
})