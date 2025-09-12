import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import clerkWebHooks from "./controllers/ClerkWebHooks.js";
import bookingRoutes from "./routes/bookings.js";

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/clerk", clerkWebHooks);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => res.send("API is working fine"));

app.get("/favicon.ico", (req, res) => res.status(204).end());
app.get("/next-booking.png", (req, res) => res.status(204).end());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));