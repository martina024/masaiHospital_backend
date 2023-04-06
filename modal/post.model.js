const mongoose=require("mongoose")

const postSchema=mongoose.Schema({
    "name":String,
    "imageUrl":String,
    "specialization":String,
    "experience":Number,
    "location":String,
    "date":Number,
    "slots":Number,
    "fee":Number,
    "userID":String
},
{
    versionKey:false
}
)

const PostModel=mongoose.model("post",postSchema)

module.exports={PostModel}
