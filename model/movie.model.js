import mongoose from "mongoose";
const { Schema } = mongoose;

const movieSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "it is required"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    rating: { type: Number, required: true },
    year: { type: Number, required: [true, "it is required"], unique: true },
    duration: {
      type: Number,
      required: [true, "it is required"],
      unique: true,
    },
  },
  { timestamps: true }
);

export const Movie = mongoose.model("Movie", movieSchema);
