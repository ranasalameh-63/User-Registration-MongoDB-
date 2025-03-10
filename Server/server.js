require("dotenv").config();
const userRoutes = require ("./routes/usersRoutes")
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const jwt = require("jsonwebtoken"); 
const cookiesParser = require("cookie-parser");
const bodyParser = require("body-parser");


const app = express();
const PORT = process.env.PORT || 6000;

// Middleware
app.use(bodyParser.json());
app.use(cookiesParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true })); // Parse form data

// Connect to MongoDB
connectDB();

// Routes
app.use("/users", userRoutes );

app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


