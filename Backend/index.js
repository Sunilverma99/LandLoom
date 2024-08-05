import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.route.js"; // Adjust the path as necessary
import userPropertyRoutes from "./routes/property.route.js";
import govermentPropertyRoutes from "./routes/govermentProperty.route.js"; // Adjust the path as necessary
// import { upload } from "./middleware/multer.middleware.js"; // Adjust the path as necessary
import "dotenv/config"; // Load environment variables from .env file

const app = express();


// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Middleware to parse cookies
app.use(cookieParser());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/property",userPropertyRoutes);
app.use("/api/v1/governmentProperty",govermentPropertyRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
