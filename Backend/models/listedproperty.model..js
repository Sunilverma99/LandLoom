import mongoose ,{Schema} from "mongoose";

const listedPropertySchema=new Schema({
    nftURL:{
        type : String ,
        required: true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    rate:{
        type: Number,
        required:true
    },
    images:{
        type: Array,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    }
});

const ListedProperty = mongoose.model("GovermentPropertyDataset",listedPropertySchema);
export default ListedProperty;  