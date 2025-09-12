import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: String, // Clerk user ID
  email: { type: String, required: true, unique: true },
  username: String,
  image: String,
}, { timestamps: true });

export default mongoose.model("User", userSchema);