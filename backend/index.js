import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
// Load environment variables from .env file
const result = dotenv.config();

if (result.error) {
  console.error("Error loading .env file:", result.error);
} else {
  console.log("Environment variables loaded successfully");
}
const app = express();

// Middleware to parse JSON requests
app.use(express.json()); //allows us to parse incoming request: req.body
app.use(cookieParser()); // allows us to parse incoming cookies

// Routes
app.use("/api/auth", authRoutes);

// Start server and connect to database
app.listen(5000, () => {
  connectDB();

  console.log("Server is running at port 5000");
});
