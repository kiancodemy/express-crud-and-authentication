import mongoose from "mongoose";

export const connection = async () => {
  try {
    await mongoose.connect(process.env.Url);
    console.log("connected");
  } catch (err) {
    console.log("not--connected");
  }
};
