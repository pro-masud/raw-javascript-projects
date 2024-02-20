import fs from "fs";
import { generateMongoId } from "../helper/helper.js";
export const createHomeController = (req, res) => {
   // requiest all data get here
   const {name, regularPrice, selaPrice, stock, productPhotos} = req.body;
   
   // console.log(name, regularPrice, selaPrice, stock, productPhotos);

   /**
    * name and regular price validation
    * */ 

   if(!name || !regularPrice){
      res.status(401).json({message: "Fields Must Be Empty!!!"});
      return;
   }


   /**
    * create a database and write data
    * */ 
   // const productData = JSON.parse(fs.readFileSync("db/database.json").toString());
   const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

   const productDatastacure = {
      id: generateMongoId(),
      name,
      regularPrice,
      selaPrice,
      stock,
      productPhotos: req.file.filename,
   }

   // product data push to Database
   productData.push(productDatastacure);

   // write all data json database file
   fs.writeFileSync("db/product.json", JSON.stringify(productData));
   // fs.writeFileSync("db/database.json", JSON.stringify(productData));

   console.log(productDatastacure);


   // get all data show output 
   res.status(200).json({
      productData,
      message: "All Data Submit Successfully"
   })

}