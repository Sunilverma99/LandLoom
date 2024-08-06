import ListedProperty from "../models/listedproperty.model..js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "./../utils/ApiError.js";

import GovernmentPropertyDataset from "../models/govermentPropertyDataset.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const propertyRegister=asyncHandler(async(req,res)=>{
    const {nftURL,description,rate,images,pincode,address}=req.body;
    if(!nftURL || !description || !rate || !images || !pincode || !address){
        throw new ApiError(500, "Some details were not send ! Try again");
    }

    // nft verication code has to be done
    const propertyFind = await GovernmentPropertyDataset.findOne({ propertyNFT: nftURL });

    if(!propertyFind) throw new ApiError(400,"This property doesn't belong to you");
  


    // nft verification
    if(propertyFind.propertyLocationPincode!=pincode) throw new ApiError(400,"This property doesn't belong to you");
    const newProperty=await ListedProperty.create({
        nftURL,
        description,
        rate,
        images,
        pincode,
        address

    })

    const checkCreatedProperty = await ListedProperty.findById(newProperty._id);
      if (!checkCreatedProperty) {
        throw new ApiError(500, "Some error occured while listing your property");
      }
    
      // Send response
      res
        .status(200)
        .json(
          new ApiResponse(200, checkCreatedProperty, "Your Property Listed Successfully!!")
        );

});

const propertyUpdate=asyncHandler(async(req,res)=>{
    if(!nftURL ){
        throw new ApiError(500, "Your Property NFT Url is compulsory");
    }
    const {nftURL,description,rate,images,pincode,address}=req.body;
    const updatedProperty=await ListedProperty.findOneAndUpdate({nftURL},{
        description,
        rate,
        images,
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

export {propertyRegister,propertyUpdate,propertyDelete};