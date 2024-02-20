import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import multer from "multer";


// init dotenv config here
dotenv.config();
// init express js here
const app = express();

// create port number here 
const PORT = process.env.PORT;


// create a server within nodejs and express js
app.listen(PORT, () => {
    console.log(`Server Running Port Number Is 5051`.bgGreen.black);
})