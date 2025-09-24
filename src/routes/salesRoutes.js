const express = require("express");
const Sale = require("../models/Sale");

const router = express.Router();

// ➕ Create Sale
router.post("/", async (req, res) => {
  try {
    const { product, quantity, price, userId } = req.body;
    const sale = new Sale({ product, quantity, price, userId });
    await sale.save();
    res.status(201).json(sale);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📋 Get All Sales
router.get("/", async (req, res) => {
  try {
    const sales = await Sale.find().populate("userId", "name email");
    res.json(sales);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📄 Get Sales by User
router.get("/user/:id", async (req, res) => {
  try {
    const sales = await Sale.find({ userId: req.params.id });
    res.json(sales);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
