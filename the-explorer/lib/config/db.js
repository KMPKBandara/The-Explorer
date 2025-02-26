/*import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kmpkbandara:5jC7xuXwJX6xvW5z@cluster0.ivjmj.mongodb.net/the-explorer"
  );
  console.log("DB Connected");
};
*/
import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to MongoDB");
      return;
    }
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
};
