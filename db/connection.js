import mongoose from "mongoose"

const connectDB=()=>{
    mongoose.connect("mongodb+srv://DIYA:DJ25102002@clusternew.zmaz7mt.mongodb.net/Bloging")
    
.then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})
}

export default connectDB;
