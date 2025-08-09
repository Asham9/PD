import mongoose from "mongoose";

const connectDB = (url) => {
  return mongoose.connect(url)
  .then(()=>{console.log('Succefully connected to DB')})
  .catch((error)=>console.log(error));
}

export default connectDB;