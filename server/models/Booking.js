import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: { type: String, ref: "User", required: true }, // Clerk ID
  date: { type: Date, required: true },
  guests: { type: Number, required: true },
  notes: String,
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);