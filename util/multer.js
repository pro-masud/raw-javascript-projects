import multer from "multer";

// create multer file managements system 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(file.fieldname === "productPhotos"){
            cb(null, "public/products");
        }
    },
    filename:(req, file, cb) => {
        cb(null, Date.now() +"_"+ Math.floor(Math.random() * 10000) + "_" + file.originalname);
    }
});

export const homePageFileUpload = multer({storage}).single("productPhotos");
