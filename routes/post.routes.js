const express=require("express")
const { PostModel } = require("../modal/post.model")




const postRouter=express.Router()

postRouter.get("/",async(req,res)=>{
    try{
        
        const notes=await PostModel.find()
        res.send(notes)
    }
    catch(err){
        console.log(err)
        console.log({"message":"Something went wrong"})
    }
})


postRouter.post("/appointments",async(req,res)=>{
    const payload=req.body
    try{
        const new_post=new PostModel(payload)
        await new_post.save()
        res.send({"message":"Created the appointment",payload})

    }catch(err){
        console.log(err)
        res.send({"message":"Something went wrong"})
    }
    
})







module.exports={postRouter}