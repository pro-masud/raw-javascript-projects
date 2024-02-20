import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import multer from "multer";
import createHome from "./router/index.js";


// init dotenv config here
dotenv.config();
// init express js here
const app = express();

// init json encoded here
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// create port number here 
const PORT = process.env.PORT;

// init router here
app.use(createHome);


// create a server within nodejs and express js
app.listen(PORT, () => {
    console.log(`Server Running Port Number Is 5051`.bgGreen.black);
})