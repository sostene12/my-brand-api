import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected!");
  } catch (error) {
    console.log("error",error.message);
    
  }
};

export default dbConnect;
