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
const salesRoutes = require("./routes/salesRoutes"); // 👈 import

app.use("/api/auth", authRoutes);
app.use("/api/sales", salesRoutes); // 👈 register


module.exports = app;
