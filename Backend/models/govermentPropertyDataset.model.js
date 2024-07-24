import mongoose,{Schema} from "mongoose";

const propertySchema = new Schema({
    propertyId:{
        type:String,
        required:true,
        unique:true,
    },
    propertyType:{
        type:String,
        required:true,
    },
    propertyLocation:{
        type:String,
        required:true,
    },
    propertyOwner:{
        type:String,
        required:true,
    },
    propertyOwnerContact:{
        type:String,
        required:true,
    },
    propertyOwnerEmail:{
        type:String,
        required:true,
    },
    propertyOwnerAddress:{
        type:String,
        required:true,
    },
    propertySize:{
        type:String,
        required:true,
    },
    // propertyOwnerAadhar:{
    //     type:String,
    //     required:true,
    // },
    // propertyOwnerPan:{
    //     type:String,
    //     required:true,
    // },
    
    propertyNFT:{
        type:String,
        required:true,
    },
    propertyWaterAndElectrityConnection:{
      type:Boolean,
      default:true,
    },

},
{
    timestamps: true,
  }
);
const GovermentPropertyDataset = mongoose.model("GovermentPropertyDataset",propertySchema);
export default GovermentPropertyDataset;  