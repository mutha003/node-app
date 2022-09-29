const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://shadab12:Shadab123@cluster0.xactoot.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("mongoose connection is success");
}).catch((error)=>{
    console.log(error);
})






// mongodb://localhost:27017/Fullstack