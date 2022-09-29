const express =require('express');
const path=require("path");
require("./db/conn")
const Userdata=require("./model/schma")

const app =express();
const port=process.env.PORT || 5000;



// middleware 
const pathstatic=path.join(__dirname,"../public")

const component=path.join(__dirname,"../src/component")
// console.log(component);

app.use(express.static(pathstatic))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// hbs use
app.set("view engine","hbs")

app.set("views",component)



app.get("/",(req,res)=>{
    res.render("index")
    
})
app.post("/",async(req,res)=>{
   
  try {

    const Usermsg=new Userdata(
    {
  firstname:req.body.firstname,
  email:req.body.email,
  phone:req.body.phone,
  message:req.body.message
}
    )
    await Usermsg.save();
    res.status(200).render("index")
  } catch (error) {
    res.status(500).send(error)
  }
 
   

})


app.listen(port,()=>{
    console.log(`server runining at ${port}`);
})


// {
//   firstname:req.body.firstname,
//   lastname:req.body.lastname,
//   email:req.body.email,
//   phone:req.body.phone,
//   message:req.body.message
// }