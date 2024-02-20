export const createHomeController = (req, res) => {
   // requiest all data get here
   const {name, regularPrice, selaPrice, stock, productPhotos} = req.body;
   
   console.log(name, regularPrice, selaPrice, stock, productPhotos);

   /**
    * name and regular price validation
    * */ 

   if(!name || !regularPrice){
      res.status(401).json({message: "Fields Must Be Empty!!!"});
      return;
   }

}