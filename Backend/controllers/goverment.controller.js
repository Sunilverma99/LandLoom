import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "./../utils/ApiError.js";
import GovermentPropertyDataset from "../models/govermentPropertyDataset.model.js";
const governmentRegister=asyncHandler(async(req,res)=>{
   if(!req.body.propertyType||!req.body.propertyLocation||!req.body.propertyOwner||!req.body.propertyOwnerContact||!req.body.propertyOwnerEmail||!req.body.propertyOwnerAddress||!req.body.propertySize||!req.body.propertyNFT){
       return next(new ApiError("Please fill all the fields",400));
   }
    const propertyType=req.body.propertyType;
    const propertyLocation=req.body.propertyLocation;
    const propertyOwner=req.body.propertyOwner;
    const propertyOwnerContact=req.body.propertyOwnerContact;
    const propertyOwnerEmail=req.body.propertyOwnerEmail;
    const propertyOwnerAddress=req.body.propertyOwnerAddress;
    const propertySize=req.body.propertySize;
    const propertyNFT=req.body.propertyNFT;
    const propertyWaterAndElectrityConnection=req.body.propertyWaterAndElectrityConnection;
    const propertyLocationPincode=req.body.propertyLocationPincode;
    
    const newProperty=new GovermentPropertyDataset({
        propertyType,
        propertyLocation,
        propertyOwner,
        propertyOwnerContact,
        propertyOwnerEmail,
        propertyOwnerAddress,
        propertySize,
        propertyNFT,
        propertyWaterAndElectrityConnection,
        propertyLocationPincode,
    });
    const savedProperty=await newProperty.save();
    res.status(201).json(savedProperty);
});
const governmentUpdate=asyncHandler(async(req,res)=>{
    const propertyId=req.params.id;
    const propertyType=req.body.propertyType;
    const propertyLocation=req.body.propertyLocation;
    const propertyOwner=req.body.propertyOwner;
    const propertyOwnerContact=req.body.propertyOwnerContact;
    const propertyOwnerEmail=req.body.propertyOwnerEmail;
    const propertyOwnerAddress=req.body.propertyOwnerAddress;
    const propertySize=req.body.propertySize;
    const propertyNFT=req.body.propertyNFT;
    const propertyWaterAndElectrityConnection=req.body.propertyWaterAndElectrityConnection;
    const propertyLocationPincode=req.body.propertyLocationPincode;
    const updatedProperty=await GovermentPropertyDataset.findByIdAndUpdate(propertyId,{
        propertyType,
        propertyLocation,
        propertyOwner,
        propertyOwnerContact,
        propertyOwnerEmail,
        propertyOwnerAddress,
        propertySize,
        propertyNFT,
        propertyWaterAndElectrityConnection,
        propertyLocationPincode,
    },{new:true});
    res.status(200).json(updatedProperty);
});
    
const governmentDelete=asyncHandler(async(req,res)=>{
    const propertyId=req.params.id;
    await GovermentPropertyDataset.findByIdAndDelete(propertyId);
    res.status(200).json("Property Deleted Successfully");
});

export {governmentRegister,governmentUpdate,governmentDelete};