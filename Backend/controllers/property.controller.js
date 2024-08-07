import ListedProperty from "../models/listedproperty.model..js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "./../utils/ApiError.js";

import GovernmentPropertyDataset from "../models/govermentPropertyDataset.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const propertyRegister = asyncHandler(async (req,res) => {
  console.log("backend hit");
  

  const { nftURL, description, rate, imageUrls, pincode, address,userId } = req.body;
  console.log(req.body);

  if (!nftURL || !description || !rate || !imageUrls || !pincode || !address||!userId) {
      throw new ApiError(400, "Some details were not sent! Try again"); // Changed to 400 for client-side error
  }

  // Verify NFT
  const propertyFind = await GovernmentPropertyDataset.findOne({ propertyNFT: nftURL });
console.log(propertyFind);
  // Check if property is found
  if (!propertyFind) {
      throw new ApiError(400, "This property doesn't belong to you");
  }

  // Verify pincode
  if (propertyFind.propertyLocationPincode !== pincode) {
      throw new ApiError(400, "This property doesn't belong to you");
  }

  // Create new property
  const newProperty = await ListedProperty.create({
      nftURL,
      description,
      rate,
      imageUrls,
      pincode,
      address,
        userId
  });

  // Check if property is created
  const checkCreatedProperty = await ListedProperty.findById(newProperty._id);
  if (!checkCreatedProperty) {
      throw new ApiError(500, "Some error occurred while listing your property");
  }

  // Send response
  res.status(200).json(new ApiResponse(200, checkCreatedProperty, "Your Property Listed Successfully!!"));
});


const propertyUpdate=asyncHandler(async(req,res)=>{
    if(!nftURL ){
        throw new ApiError(500, "Your Property NFT Url is compulsory");
    }
    const {nftURL,description,rate,imageUrls,pincode,address}=req.body;
    const updatedProperty=await ListedProperty.findOneAndUpdate({nftURL},{
        description,
        rate,
        imageUrls,
        pincode,
        address
    },{new:true});
    res
    .status(200)
    .json(
      new ApiResponse(200, updatedProperty, "Your property details have been updated!")
    );
});

const propertyDelete=asyncHandler(async(req,res)=>{
    const  nftURL=req.params.id;
    await ListedProperty.findOneAndDelete({nftURL});
    res.status(200).json("Property Deleted Successfully");
})

const getAllRegisterproperty=asyncHandler(async(req,res)=>{
    const allProperties=await ListedProperty.find();
    res.status(200).json(allProperties);

})
// const getMyProperties=asyncHandler(async(req,res)=>{
//     const userRef=req.params.id;
//     const myProperties=await ListedProperty.find({userRef});
//     res.status(200).json(myProperties);
// })
export {propertyRegister,propertyUpdate,propertyDelete,getAllRegisterproperty};