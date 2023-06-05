const express=require("express")
const app=express();
const path=require("path");
require("./db/conn")
const port=process.env.PORT || 3000;

// * Add html file in dom 

const static_path=path.join(__dirname,"../public")
console.log(path.join(__dirname,"../public"))
app.use(express.static(static_path))

*// 



app.get("/", (req,res) => {
      res.send("hello i am leaning")
})


app.listen(port , () => {
      console.log(`server is runnig at port no ${port}`)
})