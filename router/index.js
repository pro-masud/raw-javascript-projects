import express from "express";
import { createHomeController } from "../controller/createHomeMiddleware.js";
import { homePageFileUpload } from "../util/multer.js";

// init express js router here
const router = express.Router();

router.post("/", homePageFileUpload, createHomeController)


// export default router 
export default router;