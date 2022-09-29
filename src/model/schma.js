const mongoose =require("mongoose");

const fullSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        
    },
   
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
      
    },

    message:{
        type:String,
        required:true,
    },
   
})


// create collection

const User =mongoose.model("fulldetail",fullSchema);


module.exports=User;