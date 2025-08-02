import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const app = express();
 
app.get("/api/auth/signup",(req,res)=>{
    res.send("<h1> SIGN UP PLEASE !</h1>");
})
app.get("/api/auth/login",(req,res)=>{
    res.send("<h1> LOGIN  PLEASE !</h1>");
})
app.get("/api/auth/logout",(req,res)=>{
    res.send("<h1> LOGOUT PLEASE !</h1>");
})


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})
