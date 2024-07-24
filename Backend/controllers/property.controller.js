import ListedProperty from "../models/listedproperty.model..js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "./../utils/ApiError.js";

import GovernmentPropertyDataset from "../models/govermentPropertyDataset.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const propertyRegister=asyncHandler(async(req,res)=>{
    const {nftURL,description,rate,images,pincode}=req.body;
    if(!nftURL || !description || !rate || !images || !pincode){
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
        pincode
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

export {propertyRegister};