const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
require("dotenv").config()
const app=express()
const router=require("./routes/users")
const port=process.env.port || 3000
mongoose.set("strictQuery",true)
//middleware
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//mongoose connection
mongoose.connect(process.env.MONGO_URL,
{useNewUrlParser: true,useUnifiedTopology:true},()=>{
    console.log("DB conected")
})
app.use("/user",router)
app.listen(port,()=>{
    console.log(`port running at ${port}`)
})
