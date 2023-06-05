const mongoose=require("mongoose")


mongoose.connect("mongodb://localhost:27017/youtubeRegistration", {
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true
}).then(() => {
      console.log(`connectio ok`)
}).catch((e) => {
      console.log("not ok ")
})