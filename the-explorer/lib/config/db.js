import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://kmpkbandara:5jC7xuXwJX6xvW5z@cluster0.ivjmj.mongodb.net/the-explorer')
    console.log("DB Connected");
}