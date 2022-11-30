import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://romit:romit@cluster0.ggnruk8.mongodb.net/?retryWrites=true&w=majority`;
  try {
    // useNewUrlParser kya use hai iska
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
