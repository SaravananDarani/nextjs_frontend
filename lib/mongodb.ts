import mongoose from "mongoose";
const uri: any = process.env.MONGO_URI;
const connectMongo: any = async () => mongoose.connect(uri);
export default connectMongo;