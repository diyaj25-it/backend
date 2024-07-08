import mongoose from "mongoose"

const connectDB=()=>{
    mongoose.connect("mongodb+srv://Diyajain25:4BuE4ufrmRGYNAtC@bloging.baacmds.mongodb.net/blogging")
    
.then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})
}

export default connectDB;
