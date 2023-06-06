const mongoose=require("mongoose")

// mongodb://localhost:27017

mongoose.connect("mongodb://127.0.0.1:27017/youtubeRegistration", {
      // useNewUrlParser:true,
      // useUnifiedTopology:true,
      // useCreateIndex:true
}).then(() => {
      console.log(`connection ok`)
}).catch((e) => {
      console.log("not ok ")
})