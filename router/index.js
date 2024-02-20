import express from "express";
import { createHomeController } from "../controller/createHomeMiddleware.js";

// init express js router here
const router = express.Router();

router.get("/", createHomeController)


// export default router 
export default router;