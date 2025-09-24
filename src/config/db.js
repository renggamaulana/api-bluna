const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // optional: kalau mau lebih fleksibel dengan query
    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ Error connecting MongoDB:", error.message);
    process.exit(1); // stop server kalau gagal connect
  }
};

module.exports = connectDB;
