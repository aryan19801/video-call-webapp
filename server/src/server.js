import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Routes/auth.Routes.js";
import { connectDB } from "./lib/db.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use("/api/auth", authRoutes);
 



app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
    connectDB();
})
