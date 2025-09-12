import Booking from "../models/Booking.js";
import User from "../models/UserModel.js";
import sendEmail from "../utils/sendEmails.js"

export const createBooking = async (req, res) => {
  try {
    const { userId, date, guests, notes } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const booking = await Booking.create({ userId, date, guests, notes });

    await sendEmail({
      to: user.email,
      subject: "Booking Confirmation",
      text: `Hi ${user.username}, your booking for ${date} is confirmed.`,
    });

    res.status(201).json({ success: true, booking });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};