import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema({
  propertyType: {
    type: String,
    required: true,
  },
  propertyLocation: {
    type: String,
    required: true,
  },
  propertyOwner: {
    type: String,
    required: true,
  },
  propertyOwnerContact: {
    type: String,
    required: true,
  },
  propertyOwnerEmail: {
    type: String,
    required: true,
  },
  propertyOwnerAddress: {
    type: String,
    required: true,
  },
  propertySize: {
    type: String,
    required: true,
  },
  propertyNFT: {
    type: String,
    required: true,
    unique: true, // Ensure unique values for propertyNFT
  },
  propertyWaterAndElectrityConnection: {
    type: Boolean,
    default: true,
  },
  propertyLocationPincode: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true,
});

const GovernmentPropertyDataset = mongoose.model("GovernmentPropertyDataset", propertySchema);
export default GovernmentPropertyDataset;
