import colors from "colors";
import mongoose from "mongoose";


export const connectDB = async () => {
  console.log(process.env.MONGO_URI);
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    const url = `${connection.host}:${connection.port}`;
    console.log(colors.cyan.bold("MongoDB connected : " + url));
  } catch (error) {
    console.error(
      colors.bgRed.white.bold("MongoDB connection error:" + error.message)
    );
    process.exit(1);
  }
};
