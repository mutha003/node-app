const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/Fullstack").then(()=>{
    console.log("mongoose connection is success");
}).catch((error)=>{
    console.log(error);
})



