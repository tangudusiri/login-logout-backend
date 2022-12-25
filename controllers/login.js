const User=require("../model/user")
const login=(req,res)=>{
    const {email,password}=req.body
        User.findOne({email:email},(err,user)=>{
            if(user){
                if(password===user.password){
                 return   res.send({message:"Login Successful",user})
                }else{
                 return   res.send({message:"Invalid Password"})
                }
            }
           return res.send({message:"user doesnot exist"})
        })   
}

const allUsers=async(req,res)=>{
    let users
    try{
        users= await User.find()
    }catch(err){
        console.log(err)
    }
   return res.send({users})
}

const register=(req,res)=>{
    const {email,password,password2}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
          return res.send({message:"User already exist"})
        }else{
            user= new User({
                email,
                password,
                password2
            })
            user.save(err=>{
                if(err){
                    console.log(err)
                }
                return res.send("registered successfully")
            })
        }
    }) 
}

exports.login=login
exports.allUsers=allUsers
exports.register=register




