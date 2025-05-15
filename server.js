// ==================== Import Required Modules ====================
// Express framework for server setup
const express = require("express");

// Mongoose for MongoDB database connection
const mongoose = require("mongoose");

// Middleware for handling JSON requests
const bodyParser = require("body-parser");

// CORS (Cross-Origin Resource Sharing) to allow frontend requests
const cors = require("cors");

// Dotenv for managing environment variables
require("dotenv").config();

// ==================== Initialize Express App ====================
const app = express();
app.use(cors());
app.use(bodyParser.json());

// ==================== Connect MongoDB Database ====================
// MongoDB connection string (Replace with your own if using MongoDB Atlas)
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/mechaStudyDB";

// Establish connection
mongoose
    .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ==================== Define Database Schema ====================
// Define a schema for Study Materials
const MaterialSchema = new mongoose.Schema({
    type: String,       // Type of study material (notes, question-papers, videos)
    subject: String,    // Subject of study material
    title: String,      // Title of material
    link: String       // URL of material
});

// Create a Model from the Schema
const Material = mongoose.model("Material", MaterialSchema);

// ==================== API Routes ====================
// Test Route (To check if the server is running)
app.get("/", (req, res) => {
    res.send("Backend Server is Running!");
});

// Route to Fetch Study Materials (GET Request)
app.get("/materials", async (req, res) => {
    try {
        const materials = await Material.find({});
        res.json(materials);
    } catch (error) {
        res.status(500).json({ message: "Error fetching study materials", error });
    }
});

// Route to Add New Study Material (POST Request)
app.post("/materials", async (req, res) => {
    try {
        const newMaterial = new Material(req.body);
        await newMaterial.save();
        res.json({ message: "Study material added successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error adding study material", error });
    }
});

// ==================== Start Server ====================
// Define the port where the backend server will run
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});