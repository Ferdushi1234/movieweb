import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://gulfaamsaifi1234567:LeM4srgK425NSedR@cluster0.hh8gt5l.mongodb.net/dbConn');
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
