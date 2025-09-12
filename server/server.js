import express from "express"
import "dotenv/config"
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebHooks from "./controllers/ClerkWebHooks.js";

connectDB()

const app=express();
app.use(cors());


//middleware-get all data via json methods
app.use(express.json())
app.use(clerkMiddleware())

//API to listen to Clerk WebHooks 
app.use("/api/clerk",clerkWebHooks);

app.get('/',(req,res)=>res.send("Api is working fine "));
const PORT=process.env.port || 3000;
 
app.listen(PORT,()=>console.log(`server is running on the port ${PORT}`));

app.get('/favicon.ico', (req, res) => res.status(204).end());
app.get('/next-booking.png', (req, res) => res.status(204).end());
