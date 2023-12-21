

import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://gulfaamsaifi1234567:LeM4srgK425NSedR@cluster0.hh8gt5l.mongodb.net/dbConn');
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
