import mongoose from "mongoose"

const connectDB=()=>{
    mongoose.connect("https://github.com/diyaj25-it/backend.git/blogging")
    
.then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})
}

export default connectDB;
