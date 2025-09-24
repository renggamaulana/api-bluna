const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json()); // 👈 ini penting untuk baca JSON body

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

module.exports = app;
