const express = require("express");
const cors =require("cors");
const mongoose =require("mongoose");
const userRoutes=require("./routes/userRoutes")
const dotenv = require("dotenv");


const app=express()


dotenv.config();
app.use(cors());
app.use(express.json())
app.use("/api/auth", userRoutes);
mongoose
    .connect(
        process.env.MONGO_URL
    )
    .then(() =>
        console.log("DB Connection Successfull !")
    ).catch((err) =>
        console.log(err));
const server=app.listen(process.env.PORT, () => {
    console.log("backend server is Running! at " + process.env.PORT);
})